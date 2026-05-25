function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

async function getReviews() {
    const reviewsContainer = document.querySelector('.reviews');
    if (!reviewsContainer) return;

    try {
        const res = await fetch('http://api.avtotech.ru/reviews');
        
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }

        const reviews = await res.json();
        
        reviewsContainer.innerHTML = '';

        if (!reviews || reviews.length === 0) {
            reviewsContainer.innerHTML = '<p class="no-reviews">Пока нет отзывов. Будьте первым!</p>';
            return;
        }

        reviews.forEach((review) => {
            const safeName = escapeHtml(review.name);
            const safeReview = escapeHtml(review.review);

            reviewsContainer.innerHTML += `
                <div class="review_card">
                    <h5 class="nickname">${safeName}</h5>
                    <p class="comment">${safeReview}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error('Ошибка загрузки отзывов:', error);
        reviewsContainer.innerHTML = '<p class="error">Не удалось загрузить отзывы. Попробуйте позже.</p>';
    }
}

async function addReview() {
    const nameInput = document.getElementById('name');
    const reviewInput = document.getElementById('review');
    const submitBtn = document.querySelector('.submit-review-btn');

    const name = nameInput?.value.trim();
    const review = reviewInput?.value.trim();

    if (!name) {
        alert('Введите ваше имя');
        nameInput?.focus();
        return;
    }

    if (!review) {
        alert('Введите текст отзыва');
        reviewInput?.focus();
        return;
    }

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Отправка...';
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('review', review);

    try {
        const res = await fetch('http://api.avtotech.ru/reviews', {
            method: 'POST',
            body: formData
        });

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Ошибка ${res.status}: ${errorText}`);
        }

        const data = await res.json();
        console.log('Отзыв добавлен:', data);

        alert('Спасибо за отзыв!');

        if (nameInput) nameInput.value = '';
        if (reviewInput) reviewInput.value = '';

        await getReviews();
    } catch (error) {
        console.error('Ошибка при отправке отзыва:', error);
        alert('Произошла ошибка. Попробуйте позже.');
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Отправить отзыв';
        }
    }
}

getReviews();

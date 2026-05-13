function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

async function fetchWithErrorHandling(url, options = {}) {
    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    return res.json();
}

async function getReviews() {
    const tbody = document.querySelector('.table tbody');
    if (!tbody) return;

    try {
        tbody.innerHTML = '<tr><td colspan="3">Загрузка...</td></tr>';
        
        const reviews = await fetchWithErrorHandling('http://api.avtotech.ru/reviews');
        
        if (!reviews.length) {
            tbody.innerHTML = '<tr><td colspan="3">Нет отзывов</td></tr>';
            return;
        }
        
        let rows = '';
        for (const review of reviews) {
            rows += `
                <tr>
                    <td>${escapeHtml(review.id)}</td>
                    <td>${escapeHtml(review.name)}</td>
                    <td>${escapeHtml(review.review)}</td>
                    <td>
                        <button class='btn btn-danger btn-sm delete-review' data-id='${escapeHtml(review.id)}'>Удаление</button>
                    </td>
                </tr>
            `;
        }
        
        tbody.innerHTML = rows;
        
        document.querySelectorAll('.delete-review').forEach(btn => {
            btn.removeEventListener('click', deleteHandler);
            btn.addEventListener('click', deleteHandler);
        });
        
    } catch (error) {
        console.error('Ошибка загрузки отзывов:', error);
        tbody.innerHTML = '<table><td colspan="3">Ошибка загрузки данных</td></tr>';
    }
}

async function deleteHandler(e) {
    const id = e.currentTarget.getAttribute('data-id');
    if (confirm(`Удалить отзыв #${id}?`)) {
        await deleteReview(id);
    }
}

async function deleteReview(id) {
    try {
        const result = await fetchWithErrorHandling(`http://api.avtotech.ru/reviews/${id}`, {
            method: 'DELETE'
        });
        
        if (result.status === true) {
            await getReviews();
            alert('Отзыв удалён');
        } else {
            alert('Не удалось удалить отзыв');
        }
    } catch (error) {
        console.error('Ошибка удаления:', error);
        alert('Ошибка при удалении отзыва');
    }
}

getReviews();

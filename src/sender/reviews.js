async function getReviews() {
    let res = await fetch('https://cg16522.tw1.ru/reviews', {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache'
        }
    });
    let reviews = await res.json();

    const tbody = document.querySelector('.table tbody');
    tbody.innerHTML = '';

    reviews.forEach((review) => {
        tbody.innerHTML += `
            
                <tr>
                    <td>${review.id}</td>
                    <td>${review.name}</td>
                    <td>${review.review}</td>

                    <td>
                        <a class='btn btn-danger btn-sm text-light' onclick='deleteReview(${review.id})'>Удаление</a>
                    </td>
                </tr>
        
        
        `
    });
}

async function deleteReview(id) {
    const res = await fetch(`https://cg16522.tw1.ru/reviews/${id}`, {
        method: 'DELETE'
    });

    const data = await res.json();

    if (data.status === true) {
        await getReviews();
    }
}

getReviews();
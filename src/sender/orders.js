async function getOrders() {
    let res = await fetch('http://api.avtotech.ru/orders', {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache'
        }
    });
    let orders = await res.json();

    const tbody = document.querySelector('.table tbody');
    tbody.innerHTML = '';

    orders.forEach((order) => {
        tbody.innerHTML += `
            <tr>
                <td>${order.id}</td>
                <td>${order.name}</td>
                <td>${order.telephone}</td>
                <td>${order.company}</td>
                <td>${order.service}</td>
                <td>${order.type}</td>
                <td>${order.avto}</td>
                <td>
                    <a class='btn btn-danger btn-sm text-light' onclick='deleteOrder(${order.id})'>Удаление</a>
                </td>
            </tr>
        `;
    });
}

async function addOrder() {
    const name = document.getElementById('name').value,
        telephone = document.getElementById('telephone').value,
        company = document.getElementById('company').value,
        service = document.getElementById('service').value,
        type = document.getElementById('type').value,
        avto = document.getElementById('avto').value;

    let formData = new FormData();
    formData.append('name', name);
    formData.append('telephone', telephone);
    formData.append('company', company);
    formData.append('service', service);
    formData.append('type', type);
    formData.append('avto', avto);

    const res = await fetch('https://cg16522.tw1.ru/orders', {
        method: 'POST',
        body: formData
    });

    const data = await res.json();

    console.log(data);

    getOrders();
}

async function deleteOrder(id) {
    const res = await fetch(`http://api.avtotech.ru/orders/${id}`, {
        method: 'DELETE'
    });

    const data = await res.json();

    if (data.status === true) {
        await getOrders();
    }
}

async function updateOrder(id) {
    const name = document.getElementById('name').value,
        telephone = document.getElementById('telephone').value,
        company = document.getElementById('company').value,
        service = document.getElementById('service').value,
        type = document.getElementById('type').value,
        avto = document.getElementById('avto').value;

    const data = {
        name: name,
        telephone: telephone,
        company: company,
        service: service,
        type: type,
        avto: avto
    }

    const res = await fetch(`http://api.avtotech.ru/orders/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data)
    });

    let resData = res.json();

    if (resData.status === true) {
        await getOrders();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getOrders();
});

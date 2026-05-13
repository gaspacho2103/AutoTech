async function fetchWithErrorHandling(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

async function getOrders() {
    const tbody = document.querySelector('.table tbody');
    if (!tbody) return;

    try {
        tbody.innerHTML = '<tr><td colspan="8">Загрузка...</td></tr>';
        
        const orders = await fetchWithErrorHandling('http://api.avtotech.ru/orders');
        
        let rows = '';
        for (const order of orders) {
            rows += `
                <tr>
                    <td>${escapeHtml(order.id)}</td>
                    <td>${escapeHtml(order.name)}</td>
                    <td>${escapeHtml(order.telephone)}</td>
                    <td>${escapeHtml(order.company)}</td>
                    <td>${escapeHtml(order.service)}</td>
                    <td>${escapeHtml(order.type)}</td>
                    <td>${escapeHtml(order.avto)}</td>
                    <td>
                        <a class='btn btn-primary btn-sm text-light' href='actions/updateOrder.php?id=${escapeHtml(order.id)}'>Редактирование</a>
                        <button class='btn btn-danger btn-sm delete-btn' data-id='${escapeHtml(order.id)}'>Удаление</button>
                    </td>
                </tr>
            `;
        }
        
        tbody.innerHTML = rows || '<tr><td colspan="8">Нет данных</td></tr>';
        
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.removeEventListener('click', deleteHandler);
            btn.addEventListener('click', deleteHandler);
        });
        
    } catch (error) {
        console.error('Ошибка загрузки заказов:', error);
        tbody.innerHTML = '<tr><td colspan="8">Ошибка загрузки данных</td></tr>';
    }
}

async function deleteHandler(e) {
    const id = e.currentTarget.getAttribute('data-id');
    if (confirm(`Удалить заказ #${id}?`)) {
        await deleteOrder(id);
    }
}

async function deleteOrder(id) {
    try {
        const result = await fetchWithErrorHandling(`http://api.avtotech.ru/orders/${id}`, {
            method: 'DELETE'
        });
        
        if (result.status === true) {
            await getOrders();
        } else {
            alert('Не удалось удалить заказ');
        }
    } catch (error) {
        console.error('Ошибка удаления:', error);
        alert('Ошибка при удалении');
    }
}

async function addOrder() {
    const name = document.getElementById('name')?.value;
    const telephone = document.getElementById('telephone')?.value;
    const company = document.getElementById('company')?.value;
    const service = document.getElementById('service')?.value;
    const type = document.getElementById('type')?.value;
    const avto = document.getElementById('avto')?.value;

    if (!name || !telephone) {
        alert('Заполните обязательные поля (имя и телефон)');
        return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('telephone', telephone);
    formData.append('company', company);
    formData.append('service', service);
    formData.append('type', type);
    formData.append('avto', avto);

    try {
        const result = await fetchWithErrorHandling('http://api.avtotech.ru/orders', {
            method: 'POST',
            body: formData
        });
        
        console.log('Заказ добавлен:', result);
        alert('Заказ успешно добавлен');
        
        document.getElementById('name').value = '';
        document.getElementById('telephone').value = '';
        
    } catch (error) {
        console.error('Ошибка добавления:', error);
        alert('Ошибка при добавлении заказа');
    }
}

getOrders();

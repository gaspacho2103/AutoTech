async function addOrder() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const companyInput = document.getElementById('company');
    const serviceSelect = document.getElementById('service');
    const typeSelect = document.getElementById('type');
    const avtoInput = document.getElementById('avto');
    const submitBtn = document.querySelector('.sender-button');

    const name = nameInput?.value.trim();
    const telephone = phoneInput?.value.trim();
    const company = companyInput?.value.trim() || '';
    const service = serviceSelect?.value;
    const type = typeSelect?.value;
    const avto = avtoInput?.value.trim() || '';

    if (!name) {
        alert('Введите имя');
        nameInput?.focus();
        return;
    }

    if (!telephone) {
        alert('Введите номер телефона');
        phoneInput?.focus();
        return;
    }

    const phoneRegex = /^[\d\s\+\(\)\-]{10,20}$/;
    if (!phoneRegex.test(telephone)) {
        alert('Введите корректный номер телефона');
        phoneInput?.focus();
        return;
    }

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Отправка...';
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('telephone', telephone);
    formData.append('company', company);
    formData.append('service', service);
    formData.append('type', type);
    formData.append('avto', avto);

    try {
        const res = await fetch('http://api.avtotech.ru/orders', {
            method: 'POST',
            body: formData
        });

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Ошибка ${res.status}: ${errorText}`);
        }

        const data = await res.json();
        console.log('Заказ отправлен:', data);

        alert('Заявка успешно отправлена!');

        if (nameInput) nameInput.value = '';
        if (phoneInput) phoneInput.value = '';
        if (companyInput) companyInput.value = '';
        if (serviceSelect) serviceSelect.value = 'Диагностика';
        if (typeSelect) typeSelect.value = 'Легковой автомобиль';
        if (avtoInput) avtoInput.value = '';

    } catch (error) {
        console.error('Ошибка при отправке:', error);
        alert('Произошла ошибка. Попробуйте позже.');
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Отправить заявку';
        }
    }
}

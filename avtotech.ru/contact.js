// Функция экранирования (защита от XSS)
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

async function getContacts() {
    const telephoneDiv = document.querySelector('.telephone');
    const footerContainer = document.querySelector('.footer__container');

    if (!telephoneDiv || !footerContainer) return;

    try {
        const res = await fetch('http://api.avtotech.ru/contacts');
        
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }

        const contacts = await res.json();
        if (!contacts || contacts.length === 0) return;

        // Очищаем перед вставкой (чтобы не дублировать при повторных вызовах)
        telephoneDiv.innerHTML = '';
        footerContainer.innerHTML = '';

        contacts.forEach((contact) => {
            const safeTelephone = escapeHtml(contact.telephone);
            const safeTelegram = escapeHtml(contact.telegram);
            const safeEmail = escapeHtml(contact.email);
            const safeAddress = escapeHtml(contact.address);

            // Вставляем в .telephone
            telephoneDiv.innerHTML += `
                <img src="assets/icons/russia.png" alt="" class="ru">
                <a class="phone" href="tel:${safeTelephone}">${safeTelephone}</a>
            `;

            // Вставляем в .footer__container
            footerContainer.innerHTML += `
                <div class="contacts">
                    <h2 class="footer__title">Наши контакты:</h2>
                    <ul>
                        <li><a href="#!"><img src="assets/icons/telega.svg"> ${safeTelegram}</a></li>
                        <li><a href="#!"><img src="assets/icons/telephone.svg"> ${safeTelephone}</a></li>
                        <li><a href="#!"><img src="assets/icons/mail.svg"> ${safeEmail}</a></li>
                    </ul>
                </div>
                <div class="adress">
                    <h2 class="footer__title">Наш адрес:</h2>
                    <h3 class="adress__desc">${safeAddress}</h3>
                </div>
            `;
        });
    } catch (error) {
        console.error('Ошибка загрузки контактов:', error);
        // Можно показать заглушку, но не ломать страницу
        if (telephoneDiv) telephoneDiv.innerHTML = '<span class="error">Контакты временно недоступны</span>';
    }
}

getContacts();

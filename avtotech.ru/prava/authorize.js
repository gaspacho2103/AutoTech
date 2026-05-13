async function securityAuth() {
    try {
        let res = await fetch('http://api.avtotech.ru/prava');

        if(!res.ok) {
            throw new Error(`Ошибка запроса: ${res.status}`);
        }

        let orders = await res.json();

        let login = document.getElementById('login').value;
        let password = document.getElementById('password').value;

        const trueLogin = orders.login;
        const truePassword = orders.password;

        if (login === trueLogin && password === truePassword) {
            document.location.href = 'admin.php';
        } else {
            alert('Неверно введён логин или пароль');
        }
    } catch(error) {
        console.error("Получена ошибка: ", error);
    } 
}

async function securityAuth() {
    let res = await fetch('http://api.avtotech.ru/prava');
    let orders = await res.json();

    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    const trueLogin = orders.login;
    const truePassword = orders.password;

    if (login === trueLogin && password === truePassword) {
        ipcRenderer.send('load-new-page', 'src/main.html');
        console.log('all good');
    } else {
        alert('Неверно введён логин или пароль');
    }

    
    
}


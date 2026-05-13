<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>АвтоТех - СТО в Энгельсе</title>
        <link rel="stylesheet" href="../css/window.css">
        <link rel="icon" href="../assets/icons/favicon.ico">
    </head>
    <body>
            <form class="authorize" action="" method="post">
                <h2 class="auth__title">Авторизация</h2>
                <div class="form__group">
                    <input class="form__input" type="text" name="login" id="login" placeholder=" ">
                    <label class="form__label">Введите логин</label>
                </div>
                <div class="form__group">
                    <input class="form__input" type="text" name="password" id="password" placeholder=" ">
                    <label class="form__label">Введите пароль</label>
                </div>
                <button type="submit" class="authButton" onclick="securityAuth()">Войти</button><br>
            </form>

            <script src="authorize.js" type="module" defer></script>
    </body>
</html>

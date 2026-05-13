<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>АвтоТех - СТО в Энгельсе</title>
    <link rel="stylesheet" href="../css/admin.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="icon" href="../assets/icons/favicon.ico">
</head>
<body>
    <header class="header">
        <div class="container header-container">
            <div class="logo">
                <img src="../assets/icons/logoimg.png" alt="" class="logo-icon">
                <div class="logo__title">
                    <h3 class="logo-title">АДМИН</h3><h3 class="logo-title" id="tech">ПАНЕЛЬ</h3>
                </div>
            </div>
            <nav class="navigate">
                <a href="../" class="nav__link">Главная</a>
            </nav>
        </div>
    </header>
    <main class="main">
        <div class="container">
            <nav class="admin__menu">
                <a href="?table=orders" class="admin-button">Заказы</a>
                <a href="?table=reviews" class="admin-button">Отзывы</a>
                <a href="?table=contacts" class="admin-button">Контакты</a>
            </nav>
            <div class="admin__content">
                <?php

                    if(isset($_GET['table'])) {
                        $page = $_GET['table'];
                    }

                    if(isset($page)) {
                        switch($page) {
                            case 'orders':
                                echo "<h3 class='tableTitle'>Таблица 'Orders'</h3>
                                    <br><a class='btn btn-success text-light mt-1 mb-3' href='actions/createOrder.php'>Новый заказ</a><table class='table'>
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Имя</th>
                                                <th>Телефон</th>
                                                <th>Компания</th>
                                                <th>Услуга</th>
                                                <th>Тип авто</th>
                                                <th>Название авто</th>
                                            </tr>
                                        </thead>
                                </table> <script src='orders.js' type='module' defer></script>";
                            break;
                            case 'reviews':
                                echo "<h3 class='tableTitle'>Таблица 'Reviews'</h3>
                                    <br><table class='table'>
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Имя</th>
                                                <th>Отзыв</th>
                                            </tr>
                                        </thead>
                                </table> <script src='reviews.js' type='module' defer></script>";
                            break;
                            case 'contacts':
                                echo "<h3 class='tableTitle'>Таблица 'Contacts'</h3>
                                    <br><table class='table'>
                                        <thead>
                                            <tr>
                                            <th>Телефон</th>
                                            <th>Telegram</th>
                                            <th>Email</th>
                                            <th>Адрес</th>
                                            </tr>
                                        </thead>
                                        
                                </table> <script src='contacts.js' type='module' defer></script>";
                            break;
                        }
                    }
                ?>
                
            </div>
        </div>
    </main>
</body>
</html>

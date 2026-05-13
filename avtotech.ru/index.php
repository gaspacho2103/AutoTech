<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>АвтоТех - СТО в Энгельсе</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="assets/icons/favicon.ico">
</head>
<body>
    <header class="header">
        <div class="container header-container">
            <div class="logo">
                <img src="assets/icons/logoimg.png" alt="" class="logo-icon">
                <div class="logo__title">
                    <h3 class="logo-title">АВТО</h3><h3 class="logo-title" id="tech">ТЕХ</h3>
                </div>
            </div>
            <nav class="navigate">
                <a href="/" class="nav__link">Главная</a>
                <a href="/reviews.php" class="nav__link">Отзывы</a>
            </nav>
            <div class="telephone">
                <script src="contact.js" type="module" defer></script>
            </div>
        </div>
    </header>
    <main class="main">
        <section class="start">
            <div class="container start-container">
                <div class="start-text">
                    <h3 id="text-blue">Лучшая</h3>
                    <h3>станция технического обслуживания</h3>
                    <h3 id="text-blue">в г. Энгельс</h3>
                </div>
                <div class="start-image">
                    <img src="assets/images/automechanic.png" class="automechanic" alt="">
                </div>
            </div>
        </section>
        <section class="about">
            <div class="container">
                <div class="about__title">
                    <h3 class="about-title">О нашей компании</h3>
                </div>
                <div class="about__block">
                    <div class="about-images">
                        <img src="assets/images/example1.jpg" alt="">
                        <img src="assets/images/example2.jpg" alt="" id="secondImage">
                    </div>
                    <div class="about-desc">
                        Компания "АвтоТех" специализируется на обслуживании и ремонте коммерческого транспорта любого вида (легковые автомобили, фургоны, габаритные авто и тд.)
                        АвтоТех активно сотрудничает со множеством известных компаний по изготовлению/доставке/поставке различных продуктов и материалов. Наши специалисты имеют
                        большой опыт в сфере обслуживания автотранспорта, при устройстве на работу они проходят стажировку и дополнительные модули для проверки знаний и профессионализма.<br><br>
                        Станция технического обслуживания(СТО) находится по адресу г. Энгельс, Студенческая улица 3 на въезде в Энгельс, не далеко от учебного заведения.<br><br>
                        Отдать автомобиль в ремонт или пройти диагностику проще простого! Достаточно просто оставь заявку на сайте в форме, которая прикриплена ниже, указав своё имя, телефон,
                        название компании, выбрав услугу и тип автомобиля, а так же введя его марку и нажав на кнопку "Отправить". Либо вы можете связаться с нами по контактам, которые указаны в
                        футере сайта внизу, или по телефону который находится в шапке.<br><br>
                        После прохождения обслуживания - вы можете смело оставить отзыв о работе нашей компании и наших специалистов во вкладке "Отзывы".
                        Удачных вам поездок! :)
                        
                    </div>
                </div>
            </div>
        </section>
        <section class="order">
            <div class="container">
                <h3 class="order__title">Оставьте заявку на посещение!</h3>
                <form action="" class="zakaz" method="post">
                    <div class="first-block">
                        <label for="name" class="order-label">Введите имя:</label><br>
                        <input type="text" name="name" id="name" class="order-input"><br>
                        <label for="phone" class="order-label">Введите номер телефона:</label><br>
                        <input type="text" name="phone" id="phone" class="order-input"><br>
                        <label for="company" class="order-label">Введите название компании:</label><br>
                        <input type="text" name="company" id="company" class="order-input"><br>
                        <label for="service" class="order-label">Выберите услугу:</label><br>
                        <select name="service" id="service" class="service-select">
                            <option>Диагностика</option>
                            <option>Ремонт и замена запчастей</option>
                            <option>Шиномонтаж</option>
                        </select><br>
                    </div>
                    <div class="second-block">
                        <label for="type" class="order-label">Выберите тип автомобиля:</label><br>
                        <select name="type" id="type" class="service-select">
                            <option>Фургон</option>
                            <option>Габаритный автомобиль</option>
                            <option>Легковой автомобиль</option>
                        </select><br>
                        <label for="avto" class="order-label">Введите марку автомобиля:</label><br>
                        <input type="text" name="avto" id="avto" class="order-input"><br><br><br>
                        <button type="submit" class="sender-button" onclick="addOrder()">Отправить заявку</button>
                        <script src="order.js" type="module" defer></script>
                    </div>
                </form>
            </div>
        </section>
        <section class="services">
            <div class="container">
                <h3 class="services__title">Наши преимущества</h3>
                <div class="cards-wrapper">
                        <div class="card">
                            <img src="assets/icons/auto.png" alt="icon">
                            <h4>Качество</h4>
                            <p>Специалисты нашей конторы качествено работают с автомобилями разных производителей и типов.</p>
                        </div>
                        <div class="card">
                            <img src="assets/icons/clock.png" alt="icon">
                            <h4>Время</h4>
                            <p>От сдачи авто на ремонт и до приведения его в состояние эксплуатации проходит не более недели!</p>
                        </div>
                        <div class="card">
                            <img src="assets/icons/message.png" alt="icon">
                            <h4>Отзывы</h4>
                            <p>Клиенты нашей компании благодарят нас за честный и качественный труд и оставляют хорошие отзывы.</p>
                        </div>
                    </div>
                </div>
        </section>
    </main>
    <footer class="footer" id="footer">
		<div class="container footer__container">
			
		</div>
		<div class="copyright">
				<h2 class="footer__logo">Copyright by <a href="/prava/authorize.php">АвтоТех</a></h2>
		</div>
	</footer>
</body>
</html>

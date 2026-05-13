<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>АвтоТех - СТО в Энгельсе</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/reviews.css">
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
        <div class="container">
                <h3 class="review-title">Отзывы наших клиентов</h3>
                <div class="review__block">
                    <div class="reviews">
                        <script src="review.js" type="module" defer></script>
                    </div>
                    <div class="add__review">
                        <form action="" method="post" class="review_form">
                            <h5 class="form-title">Оставьте свой отзыв</h5>
                            <input type="text" name="name" id="name" placeholder="Введите имя"><br>
                            <textarea type="text" name="review" id="review" placeholder="Напишите о впечатлениях"></textarea><br>
                            <button class="sender-button" onclick="addReview()">Отправить</button>
                        </form>
                    </div>
                </div>
        </div>
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

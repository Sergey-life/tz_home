<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/action.js"></script>
    <title>Document</title>
</head>
<body>
<div class="container">
    <form action="server.php" method="post">
        <div class="form-group">
            <label for="exampleInputEmail1"><h4>Генератор комбинаций последовательностей слов</h4></label>
            <input  name="words" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">Введите слова через запятую.</small>
        </div>
        <div class="form-group form-check">
            <input type="checkbox" id="box" name="box">
            <label for="box">Клиент</label>
        </div>
        <button type="submit" class="btn btn-primary">Отправить</button>
    </form>
</div>
<br>
<div class="container">
    <h4 style="color: lightslategrey">Результат</h4>
    <div class="out">
        <br>
    </div>
    <div class="content">
        <div id="container"></div>
    </div>
</div>
<script type="text/javascript" src="js/local.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</body>
</html>
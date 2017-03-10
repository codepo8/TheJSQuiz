<?php

$config = require "./config.php";
require "./core/database/Connection.php";
require "./core/database/Leaderboard.php";

$connection = Connection::make($config['database']);

$requestMethod = $_SERVER['REQUEST_METHOD'];
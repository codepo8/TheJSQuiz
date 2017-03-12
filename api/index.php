<?php

use Quiz\Core;

require 'vendor/autoload.php';

$config = require "config.php";

$connection = new Quiz\core\database\Connection($config['database']);

$routesFile = Quiz\core\Router::load('app/routes.php');
//var_dump($routesFile)
//    ->direct(Request::uri(), Request::method());
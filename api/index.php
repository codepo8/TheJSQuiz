<?php

require "vendor/autoload.php";
require "app/bootstrap.php";

use Quiz\core\{Request, Router};

Router::load('app/routes.php')
    ->direct(Request::uri(), Request::method());
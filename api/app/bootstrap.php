<?php

use Quiz\Core\{App, QueryBuilder, Connection};

App::bind('config', require 'config.php');

App::bind('database', new QueryBuilder(
    Connection::getConnection(App::get('config')['database'])
));
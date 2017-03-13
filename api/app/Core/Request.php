<?php

namespace Quiz\core;

class Request
{
    public static function uri($removeFromUri = '')
    {
        $removeFromUri = App::get('config')['appPath'];
        return str_replace($removeFromUri, '', $_SERVER['REQUEST_URI']);
    }

    public static function method()
    {
        return $_SERVER['REQUEST_METHOD'];
    }
}
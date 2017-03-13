<?php
/**
 * Created by PhpStorm.
 * User: jamie
 * Date: 13/03/2017
 * Time: 02:20
 */

namespace Quiz\core;

use Exception;

class App
{
    protected static $registry = [];

    public static function bind($key, $value)
    {
        static::$registry[$key] = $value;
    }

    public static function get($key)
    {
        if (!array_key_exists($key, static::$registry)) {
            throw new Exception("No {$key} is bound in the container.");
        }
        return static::$registry[$key];
    }
}
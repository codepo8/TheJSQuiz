<?php

namespace Quiz\core\database;
use PDO;
use PDOException;

class Connection
{
    public static function getConnection($pdo)
    {
        try {
            return new PDO(
                $config['connection'].';dbname='.$config['name'],
                $config['username'],
                $config['password'],
                $config['options']
            );
        } catch (PDOException $e) {
            throw new Error('Error connecting to database.');
        }
    }
}
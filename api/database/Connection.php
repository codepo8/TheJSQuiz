<?php

class Connection
{

    function __construct($config) {

        $host = $config['host'];

        $dbName = $config['dbname'];

        $username = $config['username'];

        $password = $config['password'];

        try {

            $this->DBH = new PDO("mysql:host=$host;dbname=$dbName", $username, $password);
        }

        catch (PDOException $e) {

            echo $e->getMessage();

        }

    }


    static function getConnection() {
        $connection = new PDO();
    }

}
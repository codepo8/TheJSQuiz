<?php

namespace Quiz\Models;

use Quiz\core\{App, Connection};

use Exception;
use PDO;

class Questions
{
    protected $difficulty;
    protected $pdo;

    public function __construct($difficulty)
    {
        $this->difficulty = $difficulty;
        $this->pdo = Connection::getConnection(App::get('config')['database']);
    }

    public function load()
    {
        if(empty($this->difficulty)) {
            throw new Exception("Error: Difficulty not set.");
        }

        $query = "SELECT * FROM questions WHERE difficulty = :difficulty";
        $statement = $this->pdo->prepare($query);
        $statement->bindParam(':difficulty', $this->difficulty);
        $statement->execute();

        return json_encode($statement->fetchAll(PDO::FETCH_ASSOC));
    }
}
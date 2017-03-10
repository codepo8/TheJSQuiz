<?php

class Leaderboard
{
    private $pdo;

    private $leaderboard = [];

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    public function getLeaderboard($table, $limit = 100, $difficulty = '')
    {
        $resultToReturn = (int) $limit;

        $query = "SELECT * FROM {$table} ";
        $query .= " WHERE difficulty = :difficulty";
        $query .= " LIMIT :limit";

        $statement = $this->pdo->prepare($query);
        $statement->bindParam(':difficulty', $difficulty, PDO::PARAM_STR);
        $statement->bindParam(':limit', $resultToReturn, PDO::PARAM_INT);

        $statement->execute();

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }
}
<?php

class QueryBuilder
{
    protected $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }


    public function fetchRows($table, $limit = 100, $fields = '*')
    {
        $limit = (int)$limit;
        if (!empty($fields)) $fields = explode(', ', $fields);

        $query = "SELECT :fields FROM :table";
        $query .= " LIMIT :limit";

        $statement = $this->pdo->prepare($query);
        $statement->bindParam(':field', $fields, PDO::PARAM_STR);
        $statement->bindParam(':table', $table);
        $statement->bimdParam(':limit', $limit);
        $statement->execute();

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }
}
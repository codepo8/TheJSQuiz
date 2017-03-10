<?php
require "./bootstrap.php";

$leaderboard = new Leaderboard($connection);

if($requestMethod == 'GET') {
    $difficulty = '';
    $limit = 100;

    if(isset($_GET['difficulty'])) {
        $difficulty = $_GET['difficulty'];
    }

    if(isset($_GET['limit'])) {
        $limit = $_GET['limit'];
    }


    $data = $leaderboard->getLeaderboard('leaderboards', $limit, $difficulty);
    echo json_encode($data);
    die();
}
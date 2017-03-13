<?php

namespace Quiz\controllers;

use Quiz\Models\{Questions};

class RequestController
{
    public function home()
    {
       $questions = new Questions();
       echo $questions->load();
    }
}
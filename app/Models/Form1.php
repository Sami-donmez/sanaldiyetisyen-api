<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form1 extends Model
{
    use HasFactory;
    protected $table="form1s";

    public function departman()
    {
        return $this->belongsTo(Anabilim::class,'anabilim_id','id');
    }
}

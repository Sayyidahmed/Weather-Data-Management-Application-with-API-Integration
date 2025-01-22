<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Weather extends Model
{
    use HasFactory;

    protected $table = 'weather';

    protected $fillable = [
        'city',
        'temperature',
        'description',
        'retrieved_at',
    ];

    public $timestamps = true; // Keeps track of `created_at` and `updated_at` automatically
}

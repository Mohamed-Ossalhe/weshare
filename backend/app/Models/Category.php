<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'title'
    ];

    public function post() {
        return $this->belongsToMany(Post::class, 'post_categories', 'post_id', 'category_id');
    }
}

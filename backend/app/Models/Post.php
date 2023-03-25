<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'user_id',
        'category_id',
        'image',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function category() {
        return $this->belongsToMany(Category::class,'post_categories', 'post_id', 'category_id');
    }
    public function images() {
        return $this->hasMany(Image::class);
    }
    public function likes() {
        return $this->hasMany(Like::class);
    }
    public function comments() {
        return $this->hasMany(Comment::class);
    }
}

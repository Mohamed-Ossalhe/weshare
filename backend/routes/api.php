<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LikeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
// Post routes
Route::post("/posts",[PostController::class, 'store']);
Route::get("/posts", [PostController::class, 'index']);
Route::get("/recent-posts", [PostController::class, 'indexLimitThree']);
// update post route
Route::patch("/posts/{id}", [PostController::class, 'update']);
// show one post
Route::get("/posts/{title}", [PostController::class, 'show']);

// Category Routes
Route::resource('category', CategoryController::class);
// Like Routes
Route::post('/like', [LikeController::class, 'store']);
Route::get('/like/{user_id}/{post_id}', [LikeController::class, 'show']);

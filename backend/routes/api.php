<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\CommentController;
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

// Register Route
Route::post('/register', [AuthController::class, 'register']);
// Login Route
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function (){
    // Category Routes
    Route::resource('category', CategoryController::class);
    // Create Post
    Route::post("/posts",[PostController::class, 'store']);
    // update post
    Route::patch("/posts/{id}", [PostController::class, 'update']);
    // show one post
    Route::get("/posts/{title}", [PostController::class, 'show']);
    // Like post Routes
    Route::post('/like', [LikeController::class, 'store']);
    Route::get('/like/{user_id}/{post_id}', [LikeController::class, 'show']);
    // Comment Routes
    Route::post('/comment', [CommentController::class, 'store']);
    // Search Route
    Route::post('/posts/search', [PostController::class, 'search']);
    // Logout Route
    Route::post('/logout', [AuthController::class, 'logout']);
});

// Post routes
Route::get("/posts", [PostController::class, 'index']);
Route::get("/recent-posts", [PostController::class, 'indexLimitThree']);
// update post route
//Route::patch("/posts/{id}", [PostController::class, 'update']);
// show one post
//Route::get("/posts/{title}", [PostController::class, 'show']);

// Category Routes
//Route::resource('category', CategoryController::class);
// Like Routes
//Route::post('/like', [LikeController::class, 'store']);
//Route::get('/like/{user_id}/{post_id}', [LikeController::class, 'show']);
// Comments Routes
//Route::post('/comment', [CommentController::class, 'store']);
// Search Routes
//Route::post('/posts/search', [PostController::class, 'search']);

<?php

use App\Http\Controllers\PostController;
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

Route::post("/posts",[PostController::class, 'store']);
Route::get("/posts", [PostController::class, 'index']);
Route::get("/recent-posts", [PostController::class, 'indexLimitThree']);
// update post route
Route::post("/posts/{post}", [PostController::class, 'update']);

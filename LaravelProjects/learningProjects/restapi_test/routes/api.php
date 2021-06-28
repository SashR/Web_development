<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Blog Posts 
// Route::get('/posts')

// CRUD
/* 
    1. get all (GET)        /api/posts
    2. create a post (POST)     /api/posts
    3. get a single (GET)   /api/posts/{id}
    4. update a single (PUT/PATCH)  /api/post/{id}
    5. delete (DELETE)      /api/posts/{ids}
*/

Route::get('/test', function(){
    return ['test' => 'Api works'];
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

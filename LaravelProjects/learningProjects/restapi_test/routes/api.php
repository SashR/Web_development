<?php

use App\Http\Controllers\PostsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Posts;

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
// Route::get('/posts', function() {
//     $post = Posts::create([
//         'title' => 'my first post', 
//         'slug' => 'my-first-post']);
//     return $post;
// });

//create route
// Route::post('/posts')

// update
// Route::put('/posts/{id}')

// delete
// Route::delete('/posts/{id}')

// Better to create a controller to handle these logic
// php artisan make:controller PostsController --api

// Route::get('/posts', [PostsController::class, 'index']);
// Route::get('/posts', [PostsController::class, 'store']);
// Route::get('/posts', [PostsController::class, 'update']);
// Route::get('/posts', [PostsController::class, 'destroy']);
Route::resource('/posts', PostsController::class);

// to have multiple versions of the api, we can wrap everything inside of a route group
// Route::prefix('v1')->group(function (){
//     Route::resource('/posts', PostsController::class);
// });

// CRUD
/* 
    1. get all (GET)        /api/posts
    2. create a post (POST)     /api/posts
    3. get a single (GET)   /api/posts/{id}
    4. update a single (PUT/PATCH)  /api/post/{id}
    5. delete (DELETE)      /api/posts/{ids}
*/

/*  To a create a resource (posts) in laravel
    1. Create the database and migration
    2. Create a model (tables in db)
    2.5. Create a service? N/A Eloquent ORM handles this
    3. Create controller to go get info from the DB
    4. Return that info
 */

// php artisan make:model modelName --migration


// Route::get('/test', function(){
//     return ['test' => 'Api works'];
// });

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// **************************************************************************
// great command for creating a model, migration, controller and setting it to api type
// php artisan make:model Dog --migration --controller --api
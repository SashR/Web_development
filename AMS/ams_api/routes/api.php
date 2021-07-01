<?php

use App\Http\Controllers\AssetListController;
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
// Route::get('/asset', [AssetListController::class, 'index']);
// Route::post('/assets', [AssetListController::class, 'store']);
// Route::put('/assets', [AssetListController::class, 'update']);
Route::resource('/assets', AssetListController::class);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

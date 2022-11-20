<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\TestController;
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

Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::get('/courses',[CourseController::class,'index']);

Route::middleware('auth:sanctum')->group(function() {

    Route::prefix('admin')->middleware('admin')->group(function () {
        Route::get('/',[TestController::class,'test']);  
        Route::get('/create-course',[CourseController::class,'create']);  
    });
}); 
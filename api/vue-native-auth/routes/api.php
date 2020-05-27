<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function(){
    Route::post('login', 'LoginController');
    Route::post('register', 'RegisterController');
    Route::get('user', 'UserController');
    Route::post('logout', 'LogoutController');
});
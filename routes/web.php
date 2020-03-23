<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layouts.app');
});


Route::group(['prefix' => 'contact'], function () {
    Route::get('create-contact', 'ContactController@create')->name('contact.create');
    Route::post('store-contact', 'ContactController@store')->name('contact.store');
    Route::get('daftar-contact', 'ContactController@daftar')->name('contact.daftar');
});
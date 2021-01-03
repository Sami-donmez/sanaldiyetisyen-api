<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
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

Route::get('/',function (){
    return view('welcome');
})->name('anasayfa');
Route::get('/foreign-student-application-form','App\Http\Controllers\Form\Form1Controller@index')->name('form-1');
Route::post('/foreign-student-application-form','App\Http\Controllers\Form\Form1Controller@add')->name('form-1.post');
Route::get('/tez-oneri-formu','App\Http\Controllers\Form\Form2Controller@index')->name('form-2');
Route::post('/tez-oneri-formu','App\Http\Controllers\Form\Form2Controller@add')->name('form2.post');

Route::get('/logout','App\Http\Controllers\HomeController@logout');
Route::get('/log','App\Http\Controllers\HomeController@logs')->name('admin.log');
Route::get('/university','App\Http\Controllers\UniversityController@list')->name('university-list');
Route::get('/tesekkurler','App\Http\Controllers\HomeController@tesekkur')->name('tesekkur');
Route::get('/thanks','App\Http\Controllers\HomeController@thanks')->name('tesekkur_en');

Auth::routes(['register' => false]);
Route::middleware(['auth'])->prefix('admin')->group(function (){
    Route::get('/','App\Http\Controllers\Admin\AdminController@index')->name('admin.dashboard');
    Route::get('/foreign-student-form','App\Http\Controllers\Admin\Form1Controller@index')->name('admin.form1');
    Route::get('/foreign-student-form-detay/{id}','App\Http\Controllers\Admin\Form1Controller@detay')->name('admin.form1.detay');


});



<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateForm1sTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('form1s', function (Blueprint $table) {
            $table->id();
            $table->string('ad');
            $table->string('soyadi');
            $table->string('email');
            $table->string('tel');
            $table->string('university');
            $table->string('ulke');
            $table->string('bolge');
            $table->string('sehir');
            $table->text('adres');
            $table->foreignId('anabilim_id')->constrained()->on('anabilim')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->text('pasaport');
            $table->string('pasaport_ulke');
            $table->text('diploma');
            $table->text('transkript');
            $table->text('dil_belgesi');
            $table->text('basvuru_nedeni');
            $table->integer('durum');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('form1s');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('name');
            $table->date('ngay_sinh');
            $table->string('dia_chi')->nullable();
            $table->boolean('gioi_tinh')->default(0);      
            $table->string('dien_thoai')->nullable();
            $table->string('so_tai_khoan')->nullable();
            $table->string('ten_ngan_hang')->nullable();
            $table->smallInteger('tinh_trang')->default(0);
            $table->string('anh_dai_dien')->nullable();
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
        Schema::dropIfExists('teachers');
    }
};

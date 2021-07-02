<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssetListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asset_lists', function (Blueprint $table) {
            $table->id();

            $table->string('asset_id')->unique();
            $table->string('serial_no')->unique();
            $table->string('ticket-no')->unique();
            $table->string('validated_date')->nullable();
            $table->string('location')->nullable();
            $table->string('type')->nullable();

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
        Schema::dropIfExists('asset_lists');
    }
}

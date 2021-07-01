<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssetList extends Model
{
    use HasFactory;

    protected $fillable = [
        'asset_id',
        'serial_no',
        'ticket-no',
        'validated_date',
        'location',
        'type',
    ];
}

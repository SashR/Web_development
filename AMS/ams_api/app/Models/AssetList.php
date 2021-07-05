<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AssetList extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'asset_id',
        'serial_no',
        'ticket-no',
        'validated_date',
        'location',
        'type',
        'status',
        'details',
        'site',
        'financier',
        'supplier_price'
    ];
}

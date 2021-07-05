<?php

namespace App\Http\Controllers;

use App\Models\AssetList;
use Illuminate\Http\Request;

class AssetListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all assets
        return AssetList::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // add an asset
        $request->validate([
            'asset_id' => 'required',
            'serial_no' => 'required',
            'ticket-no' => 'required',
        ]);
        return AssetList::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AssetList  $assetList
     * @return \Illuminate\Http\Response
     */
    public function show(AssetList $assetList)
    {
        //return a single asset --- Not needed
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AssetList  $assetList
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //update an asset
        $asset = AssetList::find($id);
        $asset->update($request->only('location'));
        return $asset; 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AssetList  $assetList
     * @return \Illuminate\Http\Response
     */
    public function destroy(AssetList $assetList)
    {
        //no destroying functionality
    }
}

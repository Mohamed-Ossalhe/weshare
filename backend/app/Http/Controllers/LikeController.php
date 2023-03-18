<?php

namespace App\Http\Controllers;

use App\Models\Like;
use http\Params;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $likes = Like::all();
        return response($likes, 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): Response
    {
        $data = $request->validate([
            'post_id' => 'required',
            'user_id' => 'required'
        ]);
        $likeExists = Like::where('user_id', $data["user_id"])
            ->where('post_id', $data['post_id'])
            ->first();
        if($likeExists) {
            $likeExists->delete();
            return response('like removed', 201);
        }
        $like = Like::create($data);
        return response($like, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $user_id, int $post_id): Response
    {
        $likeExists = Like::where('post_id', $post_id)
            ->where('user_id', $user_id)
            ->first();
        if(!$likeExists) {
            return response(false, 201);
        }
        return response(true, 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): Response
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): Response
    {
        //
    }
}

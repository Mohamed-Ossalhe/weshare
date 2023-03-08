<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $posts = Post::all();
        return response($posts, 201);
    }

    /**
     * Display a listing of the resource limit 3.
     */
    public function indexLimitThree(): Response
    {
        $posts = Post::orderBy('created_at', 'desc')
            ->take(3)
            ->get();
        return response($posts, 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'user_id' => 'required'
        ]);
        $post = Post::create($request->all());
        return response($post, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): Response
    {
        $post = Post::find($id);
        $post->update($request->all());
        return response($post, 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): Response
    {
        //
    }
}

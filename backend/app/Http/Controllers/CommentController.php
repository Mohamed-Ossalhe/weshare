<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $comments = Comment::all();
        return response($comments, 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): Response
    {
        $commentData = $request->validate([
            'content' => 'required',
            'post_id' => 'required',
            'user_id' => 'required'
        ]);
        $comment = Comment::create($commentData);
        return response($comment, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        //
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

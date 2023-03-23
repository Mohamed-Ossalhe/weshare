<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $posts = Post::with('images', 'likes', 'comments')->orderBy('updated_at', 'desc')->get();
        return response($posts, 201);
    }

    /**
     * Display a listing of the resource limit 3.
     */
    public function indexLimitThree(): Response
    {
        $posts = Post::with('images', 'likes', 'comments')->orderBy('updated_at', 'desc')
            ->take(3)
            ->get();
        return response($posts, 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): Response
    {
        $formData = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'user_id' => 'required',
            'category_id' => 'required',
            'image' => 'required'
        ]);

        $formData['category_id']=explode(',',$formData['category_id']);
        $post = Post::create(['title' => $request->title, 'description' => $request->description, 'user_id' => $request->user_id]);
        $post->category()->attach($formData['category_id']);
        $images = $formData['image'];
        foreach ($images as $image) {
            $file = $image->store('public/postImages');
            $filename = explode("/", $file);
            $postImages = Image::create(['content' => $filename[2], 'post_id' => $post->id]);
        }
        return response($formData, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $title): Response
    {
        $post = Post::with('images', 'likes', 'comments')->where("title", $title)->first();
        if(!$post) {
            return response(["message" => "Post Not Found!"], 404);
        }
        return response($post, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): Response
    {
        $post = Post::find($id);
        $formData = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'user_id' => 'required'
        ]);
        $post->update($formData);
        return response($post, 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): Response
    {
        $post = Post::find($id);
        return response('Post Deleted Successfully!', 200);
    }

    /**
     * Search the specified resource from storage
     */
    public function search(Request $request): Response
    {
        $searchData = $request->validate([
            'search' => 'required'
        ]);
        $post = Post::with('images')->where('title', 'like', '%'. $searchData["search"] .'%')->get();
        if(!$post) {
            return response("No Matching Found!", 404);
        }
        return response($post, 200);
    }
}

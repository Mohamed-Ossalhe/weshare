<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $categories = Category::all();
        return response($categories, 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): Response
    {
        $categoryTitle = $request->validate([
            'title' => 'required'
        ]);
        $category = Category::create($categoryTitle);
        return response($category, 201);
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

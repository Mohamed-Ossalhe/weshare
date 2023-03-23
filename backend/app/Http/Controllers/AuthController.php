<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request) : Response
    {
        $fields = $request->validate([
            'name' => 'required|string|max:100',
            'image' => 'required|image',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);
        $image = explode('/', $fields['image']->store('public/usersImages'));
        $user = User::create([
            'name' => $fields['name'],
            'image' => $image[2],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])]);

        $token = $user->createToken('ACCESS_TOKEN')->plainTextToken;
        return response([$user, $token], 201);
    }

    public function login(Request $request) : Response
    {
        $fields = $request->validate([
            'email' => 'required|email|',
            'password' => 'required|string'
        ]);
        $user = User::where('email', $fields['email'])->first();
        if(!$user || !Hash::check($fields['password'], $user->password)) {
            return response(['message' => 'Incorrect Credentials!'], 401);
        }
        $token = $user->createToken('ACCESS_TOKEN')->plainTextToken;
        return response([$user, $token], 200);
    }

    public function logout(Request $request) : Response
    {
        auth()->user()->tokens()->delete();
        return response('You Logged Out!', 200);
    }
}

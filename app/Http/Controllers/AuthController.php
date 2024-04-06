<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request){
        $credentials = $request->only('email', 'password');
        if(Auth::attempt($credentials)){
            $user = Auth::user();
           return response()->json(['user' => $user]);
        }
         return response()->json(['message' => 'Invalid credentials'], 401);
    }
        public function register (Request $request){
            $validatedData = $request->validate([
                'name'=> 'required|string|max:255',
                'email' => 'required|string|email|unique:users|max:255',
                'password' => 'required|string|min:6',
            ]);
            $user = User::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' =>Hash::make( $validatedData['password']),

            ]);
            return response()->json(['user' => $user], 201);
        }
    }
  


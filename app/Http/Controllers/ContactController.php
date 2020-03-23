<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function create()
    {
        return view('layouts.contact.create');
    }

    public function store(Request $request)
    {
        $contact = Contact::create($request->all());
        return response()->json([
            'message' => 'Data Berhasil disimpan'
        ], 200);
    }
}
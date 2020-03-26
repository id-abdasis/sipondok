<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Auth\Events\Validated;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function create()
    {
        return view('layouts.contact.create');
    }

    public function store(Request $request)
    {
        $rules = [
            'nama' => 'required|max:5',
            'telepon'   => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 401);
        }
        $contact = Contact::create($request->all());
        if ($contact) {
            return response()->json([
                'message' => 'Data Berhasil disimpan'
            ], 200);
        } else {
            return response()->json([
                'message'   => 'Gagal menyimpan data'
            ], 500);
        }
    }

    public function daftar()
    {
        return view('layouts.contact.list');
    }

    public function apiDataContact()
    {
        $contacts = Contact::paginate(5);
        return response()->json($contacts, 200);
    }
}
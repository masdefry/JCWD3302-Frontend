/*
    HTTP REQUEST -> 3 media dalam melakukan pengiriman data 
    1. req url: req.params & req.query (3x)
    2. req body (1x) -> SSL Cerficate 
    3. req headers (2x)

    GET (Mengambil data)
    - req url
    - req headers

    POST (Mengirim data/Mensubmit data)
    - req url
    - req headers
    - req body

    DELETE (Menghapus data)
    - req url
    - req headers

    UPDATE: PUT & PATCH (Mengupdate data)
    - req url
    - req headers
    - req body
*/

import Backendless from '@/lib/backendless';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const findUserByEmailAndPassword = await Backendless.Data.of(
      'UserAccount'
    ).find({ where: `email='${email}' AND password='${password}'` });

    return NextResponse.json(
      {
        message: 'Get user by email and password successful',
        user: findUserByEmailAndPassword,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error);
  }
}

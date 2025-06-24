import { NextRequest, NextResponse } from 'next/server';
import Backendless from '@/lib/backendless';

export async function POST(req: NextRequest) {
  try {
    const { email, username, password, role } = await req.json(); // Untuk mengambil data dari request

    await Backendless.Data.of('UserAccount').save({
      email,
      username,
      password,
      role
    });

    return NextResponse.json(
        {message: 'Account user created successful'},
        {status: 201},
    )
  } catch (error) {
    return NextResponse.json(error);
  }
}

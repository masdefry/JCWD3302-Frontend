import Backendless from '@/lib/backendless';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const findProducts = await Backendless.Data.of('Products').find();

    return NextResponse.json(
      { message: 'Get products successful', products: findProducts },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error);
  }
}

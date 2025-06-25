import { NextResponse } from 'next/server';
import Backendless from '@/lib/backendless';

export async function POST() {
  const products = await Backendless.Data.of('Products').find();
  console.log(products);
  return NextResponse.json(
    {
      message: 'Get products successful',
      products: products,
    },
    { status: 200 }
  );
}

// http://localhost:3000/api/products

import Backendless from '@/lib/backendless';
import { NextRequest, NextResponse } from 'next/server';

// /api/product/[productName]
export async function GET(
  _: NextRequest,
  { params }: { params: { productName: string } }
) {
  try {
    const { productName } = await params;

    const findProductByName = await Backendless.Data.of('Products').find({
      where: `name='${productName}'`,
    });

    if (findProductByName.length === 0) {
      return NextResponse.json(
        { message: `Get product detail with name ${productName} is not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: `Get product detail by name successful`,
        product: findProductByName,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

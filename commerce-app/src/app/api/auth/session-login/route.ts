import { IUsersAccount } from '@/features/types';
import Backendless from '@/lib/backendless';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const objectId = await req.headers.get('objectid');

    if (!objectId)
      return NextResponse.json(
        { message: 'ObjectId must be provide' },
        { status: 401 }
      );

    const findUserByObjectId: IUsersAccount = await Backendless.Data.of(
      'UserAccount'
    ).findById(objectId);

    return NextResponse.json(
      {
        message: 'Session login success',
        user: findUserByObjectId,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(error);
  }
}

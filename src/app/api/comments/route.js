import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

// Get All Comments
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get('postSlug');
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};

// Create Comments
export const POST = async (req) => {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: 'Not Authenticated!' }, { status: 401 })
    );
  }
  try {
    const body = await req.JSON();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify(
        { message: `Something went wrong! error: ${error}` },
        { status: 500 }
      )
    );
  }
};

 import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page')) || 1; // Parse the page as an integer
  const category = searchParams.get('category');
  const POST_PER_PAGE = 4;

  try {
    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1), // Adjust the skip calculation
      where: {
        ...(category && { catSlug: category }),
      },
    };
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};

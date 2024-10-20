import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";



interface IGetFavorite {
  params: {
    movie_id: string;
  };
}

export const GET = async (req: Request, { params }: IGetFavorite) => {
  const { movie_id } = params;

  const movieId = Number(movie_id);
  if (isNaN(movieId)) {
    return NextResponse.json({
      status: 400,
      message: "Invalid movie ID",
    });
  }
  

  try {
   

    const data = await prisma.favorites.findFirst({
      where: {
        movieId: movieId,
      },
    });

    if (!data) {
      return NextResponse.json({
        status: 404,
        message: "Favorite not found",
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Server error occurred",
    });
  }
};

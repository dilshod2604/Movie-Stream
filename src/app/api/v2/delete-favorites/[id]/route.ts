import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface IGetFavorite {
  params: {
    id: string;
  };
}

export const POST = async (req: Request, { params }: IGetFavorite) => {
  const { id } = params;
  const favoriteId = Number(id);
  if (isNaN(favoriteId)) {
    return NextResponse.json({
      status: 400,
      message: "Invalid movie ID",
    });
  }
  try {
    const favoriteExist = await prisma.favorites.findFirst({
      where: {
        id: favoriteId,
      },
    });

    if (!favoriteExist) {
      return NextResponse.json({
        status: 404,
        message: "Favorite not found",
      });
    }

    const data = await prisma.favorites.delete({
      where: {
        id: favoriteId,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Server error occurred",
    });
  }
};

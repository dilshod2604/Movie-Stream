import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { movie_id } = await req.json();
    const session = await getServerSession();

    if (!session) {
      return NextResponse.json({
        status: 401,
        message: "Необходимо авторизоваться",
      });
    }

    const userEmail = session.user?.email;

    if (!userEmail) {
      return NextResponse.json({
        status: 400,
        message: "Email пользователя отсутствует в сессии",
      });
    }

    const user = await prisma.user.findFirst({
      where: { email: userEmail },
    });

    if (!user) {
      return NextResponse.json({
        status: 404,
        message: "Пользователь не найден",
      });
    }

    const existingFavorite = await prisma.favorites.findUnique({
      where: {
        userId_movieId: {
          userId: user.id,
          movieId: movie_id,
        },
      },
    });

    if (existingFavorite) {
      return NextResponse.json({
        status: 400,
        message: "Фильм уже добавлен в избранное",
      });
    }

    const addFavorites = await prisma.favorites.create({
      data: {
        movieId: movie_id,
        userId: user.id,
        isFavorite: true,
      },
    });

    return NextResponse.json(addFavorites);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Произошла ошибка на сервере",
    });
  }
};

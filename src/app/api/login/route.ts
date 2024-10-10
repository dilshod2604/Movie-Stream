import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const POST = async () => {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const splitName = session.user?.name?.split(" ");
  const firstName = splitName?.[0] || "";
  const lastName = splitName?.[1] || "";

  try {
    const findEmail = await prisma.user.findFirst({
      where: {
        email: session.user?.email!,
      },
    });

    if (findEmail) {
      return NextResponse.json(
        { message: "Такой пользовател уже существует" },
        { status: 409 }
      );
    }

    const data = await prisma.user.create({
      data: {
        email: session.user?.email || "",
        password: "",
        firstName,
        lastName,
        photo: session.user?.image!,
      },
    });
    
    return NextResponse.json(data, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { message: e || "Internal Server Error" },
      { status: 500 }
    );
  }
};

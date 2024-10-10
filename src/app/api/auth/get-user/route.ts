import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const GET = async () => {
  const session = await getServerSession();
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: session?.user?.email!,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

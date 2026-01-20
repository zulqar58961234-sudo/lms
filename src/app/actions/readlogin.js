"use server";
import prisma from "@/lib/db";
import getSession from "./session";

export default async function ReadLogin() {
  const session = await getSession();
  const data = await prisma.user.findMany({
    where: {
      id: session.id,
    },
  })

  return data; 
}

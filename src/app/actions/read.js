"use server";
import prisma from "@/lib/db";
import getSession from "./session";
import { redirect } from "next/navigation";

export default async function ReadData() {
  const session = await getSession();

  if (!session?.id) {
    redirect("/login");
  }

  const data = await prisma.studentinfo.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  return data; // ✅ THIS WAS MISSING
}

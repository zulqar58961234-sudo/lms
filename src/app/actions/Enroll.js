"use server"
import prisma from "@/lib/db";
import getSession from "./session";

export async function EnrollJs({name, course, age, image }) {
  const session = await getSession();
  if (!session) {
    return { error: "unauthorized" };
  }

  // 🔒 STRICT IMAGE VALIDATION
  if (!image || typeof image !== "string") {
    return { error: "❌ Valid image is required to enroll" };
  }

  try {
    await prisma.studentinfo.create({
      data: {
        name,
        course,
        image, // ✅ guaranteed string URL
        age: Number(age),
      },
    });

    return { success: "✔️ Data Saved Successfully" };
  } catch (error) {
    console.error("⚠️ Something Went Wrong", error);
    return { error: "❌ Data Storing Failed" };
  }
}
export async function GetInfo(){
  await prisma.studentinfo.findMany()
}
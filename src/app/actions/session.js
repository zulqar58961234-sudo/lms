"use server";

import Jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function getSession() {
  
  const cookieStore = await cookies();
  const cookie = cookieStore.get("Auth");
  if (!cookie) {
    redirect("/login");
  }
  try {
    const decoded = Jwt.verify(cookie.value, process.env.SECRET);
    return decoded;
  } catch (error) {
    redirect("/login");
  }
}

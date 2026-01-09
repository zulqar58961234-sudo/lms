"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogOut(){
     cookies().delete("Auth")
     redirect("login")
}
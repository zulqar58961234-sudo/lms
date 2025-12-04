"use server"
import prisma from "@/lib/db";
import Jwt from "jsonwebtoken"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function LogIn({email , password}) {
    if(!email || !password){
        return {error:"Fill all the credentianls"}
    }
    const User = await prisma.user.findUnique({
        where:{email}
    })
    if(!User){
        return {error:"User not found"}
    }
    if (User.password !== password){
        return {error: "wrong password"}
    }
    const SECRET = "my-key"
    const Token = Jwt.sign({id:User.id, email:User.email}, SECRET)
    
    cookies().set("Auth", Token, {
        httpOnly:true,
        secure:true,
        path:"/"
    })
      return {success:"login successfully"}
}

"use server"
import prisma from "@/lib/db";
import Jwt from "jsonwebtoken"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function LogIn({email , password}) {
    if(!email || !password){
        return {error:"Fill all the credentianls"}
    }
    const user = await prisma.user.findUnique({
        where:{email},
       include:{
        studentinfo: true
       }
    })
    if(!user){
        return {error:"User not found"}
    }
    if (user.password !== password){
        return {error: "wrong password"}
    }
    const SECRET = "my-key"
    const token = Jwt.sign({id:user.id, email:user.email}, SECRET)
    
    cookies().set("Auth", token, {
        httpOnly:true,
        secure:true,
        path:"/"
    })
      if(user.studentinfo){
     const course = user.studentinfo.course
     if(course){
        redirect("/dahboard")
     }
      } else{
        redirect("/home")
      }
      

}

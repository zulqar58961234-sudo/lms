"use server"
import prisma from "@/lib/db";
import { redirect } from "next/navigation";


export default async function SignUp({name , email , password}){
    if(!name || !email || !password){
        return {error:"Fill all the credentials"}
    }
    try{
        await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });
      redirect("/login")
    }
    catch(error){
        console.error("something went wrong",error)
        return {error: "error while storing data"}
    }
   
}

 export async function ReadData(){
        await prisma.user.findMany()
    }
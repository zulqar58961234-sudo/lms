"use server"
import prisma from "@/lib/db"
import { redirect } from "next/navigation";

export default async function GetId(id){
    try{
        const data = await prisma.user.findUnique({
            where:{id}
        })
        return data;
    } catch(error){
        return error;
    }

}

export async function DataUpdate({id,name,email,password}){
    
        const data = await prisma.user.update({
            where:{id},
            data:{
                name,
                email,
                password,
            }
        })
        redirect("/profile")
        
    
}
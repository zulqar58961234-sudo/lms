"use server"

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default async function DelData(id){
    try{
        const res = await prisma.studentinfo.delete({
            where: {id}
        })
        revalidatePath("/dashboard")
    }catch(error){
        return null;
    }
} 

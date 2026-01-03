"use server"
import prisma from "@/lib/db";
import getSession from "./session";

export async function EnrollJs({ course , age}){
    const session = await getSession()
    if(!session){
        return {error:"unauthorized"}
    }

    try{
        await prisma.studentinfo.create({
            data : {
                userId: session.id,
                course,
                age: Number(age)
            }
        });
        return{success:"✔️Data Saved Successfully"}
    }
    catch(error){
        console.error("⚠️Something Went Wrong",error)
        return {error:"❌Data Storing Failed"}
    }
    
}
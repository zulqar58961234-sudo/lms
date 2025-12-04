"use server"
import prisma from "@/lib/db";

export async function SignJs({name , email , password}){
    if(!name || !email || !password){
        return (error,"⚠️Fill All The Credentials")
    }
    try{
        await prisma.User.create({
            data : {
                name, 
                email,
                password
            }
        });
        return{success:"✔️Data Saved Successfully"}
    }
    catch(error){
        console.error("⚠️Something Went Wrong",error)
        return {error:"❌Data Storing Failed"}
    }
    
}
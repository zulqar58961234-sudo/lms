"use server"
import Jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function getSession(){
    const cookiesStore =  cookies();
   const cookie = cookiesStore.get("Auth")

 if(!cookie) {
    redirect("/login")
 }
try{
    const decoded = Jwt.verify(cookie.value, SECRET)
    return decoded
}catch(error){
    redirect("/login")
}
 
}
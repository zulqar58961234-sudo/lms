"use client"

import DelData from "../operations/delete"

export default function EndCourse({id}){
const HandleSubmit = async ()=>{
    const data = await DelData(id);
}
return(
    <button onClick={HandleSubmit}  className="bg-red-600 text-white px-20 ml-10 mt-4 py-2 rounded-xl font-semibold text-lg hover:bg-red-700 transition">End Course</button>
)
}
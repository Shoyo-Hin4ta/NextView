'use client'

import axios from "axios"
import { GET } from "../api/users/signout/route"
import { useRouter } from 'next/navigation';

const SignOutB = () => {

    const router = useRouter();


  const handleClick = async() => {
        const res = await axios.get("http://localhost:3000/api/users/signout");
        console.log(res.data.success);
        if(res.data.success){
            router.push("/login");
        }
    }
    
  return (
    <div className= "absolute bottom-0 text-center px-2 py-1 w-full bg-red-400 hover:bg-red-200">
        <button onClick={handleClick}>
            Log Out
        </button>
    </div>
  )
}

export default SignOutB
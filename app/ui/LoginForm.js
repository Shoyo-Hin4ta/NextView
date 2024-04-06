'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import {toast} from "react-hot-toast";
import { useRouter } from "next/navigation";


const LoginForm = () => {

  const router = useRouter()

  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignIn = async(e) => {
    try {
      e.preventDefault()
      setLoading(true);
      const response = await axios.post('/api/users/login', user)
      
      console.log("Logged In", response.data);
      router.push("/dashboard");

    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(()=> {
    if(user.username.length > 0 && user.password.length > 0){
      setButtonDisabled(false);
    }
    else{
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="w-screen h-screen bg-blue-200 flex justify-center items-center">
      <form action="" className="border border-black shadow-lg flex items-center flex-col gap-2 bg-red-300 px-20 py-40 rounded-lg relative">
        <div className="mb-2 text-3xl font-bold text-white absolute top-8">LOGIN FORM</div>
        <input onChange={(e) => setUser({...user, username : e.target.value})} type="text" name="username" placeholder="Username"className=" p-4 rounded-lg"/>
        <input onChange={(e) => setUser({...user, password : e.target.value})}type="password" name="password" placeholder="Password" className="p-4 rounded-lg"/>
        <button onClick={onSignIn} className="bg-white mt-4 px-20 py-4 rounded-lg">Log In</button>
      </form>
    </div>
  )
}

export default LoginForm
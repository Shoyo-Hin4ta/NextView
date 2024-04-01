const LoginForm = () => {
  return (
    <div className="w-screen h-screen bg-blue-200 flex justify-center items-center">
      <form action="" className="border border-black shadow-lg flex items-center flex-col gap-2 bg-red-300 px-20 py-40 rounded-lg relative">
        <div className="mb-2 text-3xl font-bold text-white absolute top-8">LOGIN FORM</div>
        <input type="text" name="email" placeholder="Email"className=" p-4 rounded-lg"/>
        <input type="password" name="Password" placeholder="Password" className="p-4 rounded-lg"/>
        <button className="bg-white mt-4 px-20 py-4 rounded-lg">Log In</button>
      </form>
    </div>
  )
}

export default LoginForm
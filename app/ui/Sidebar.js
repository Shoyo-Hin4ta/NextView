import { RxDashboard } from "react-icons/rx";
import Image from 'next/image';
import { FiUsers } from "react-icons/fi";
import { BiLogoProductHunt } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import Menu from "./Menu";
import axios from "axios";
import SignOutB from "./SignOutB";
import { getSession, getUser } from "@/lib/helper";
import { fetchUser } from "@/lib/models/data";

// let data = await axios.get("http://localhost:3000/api/users/user")
// console.log(data);

const userId = getSession();

const user  = await fetchUser(userId);
console.log(user)
const menuItems = [
    {
        name: "Dashboard",
        path : "/dashboard",
        icon : <RxDashboard />
    },
    {
        name : "Users",
        path : "/dashboard/users",
        icon :<FiUsers />
    },
    {
        name : "Products",
        path : "/dashboard/products",
        icon : <BiLogoProductHunt />
    },
    {
        name : "Transactions",
        path : "/dashboard/transactions",
        icon : <GrTransaction />
    }
]

const Sidebar = () => {
    

  return (
    <div className='bg-red-300 h-full relative'>

        <div className='flex p-2 overflow-auto  items-center h-20'>
            <Image  alt='logo' src='/next-js-icon.png'
            width={40} height={40}/> 
            <span className='ml-4'>Hello {user.username} </span>
        </div>
        <Menu menuItems={menuItems}/>
        <SignOutB />

    </div>
  )
}

export default Sidebar
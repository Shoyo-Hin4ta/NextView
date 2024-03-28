import { RxDashboard } from "react-icons/rx";
import Image from 'next/image';
import { FiUsers } from "react-icons/fi";
import { BiLogoProductHunt } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import Menu from "./Menu";

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
        path : "/transactions/products",
        icon : <GrTransaction />
    }
]

const Sidebar = () => {
  return (
    <div className='relative h-screen bg-red-300 w-1/5'>
        <div className='flex border border-black p-2 overflow-auto justify-between items-center'><Image  alt='logo' src='/next-js-icon.png'
        width={40} height={40}/> <span className='ml-4'>Hello  </span>
        </div>
        <Menu menuItems={menuItems}/>
    </div>
  )
}

export default Sidebar
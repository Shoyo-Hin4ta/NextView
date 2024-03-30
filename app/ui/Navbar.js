'use client'

import { useParams, usePathname } from "next/navigation";
import { BsChatDotsFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { MdPublic } from "react-icons/md";



const Navbar = () => {

    const pathName = usePathname();
    console.log(pathName.split('/').pop())
    const lastPart = pathName.split('/').pop(); // Extracting the last part of the pathname
    const title = lastPart.charAt(0).toUpperCase() + lastPart.slice(1); // Capitalizing the first letter

  return (
    <div className="b-2 flex justify-between items-center p-2 bg-blue-100 h-20 rounded-lg">
        <div>{title === "Adduser" || title ==="Addproduct" ? "Add" : title}</div>
        <div className="flex gap-2 items-center">
            <input type="text" placeholder='Search'className="px-4 text-sm rounded-lg"/>
            <BsChatDotsFill />
            <IoIosNotifications />
            <MdPublic />
        </div>
    </div>
  )
}

export default Navbar
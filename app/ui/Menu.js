import Link from "next/link"

const Menu = ({menuItems}) => {
  return (
    <div className="mt-4 ">
        <ul>
            {menuItems.map((item)=>{
                return (<li key={item.name} className="w-full p-2 mt-6 mb-7 hover:bg-red-200"><Link href={item.path}>
                    <div className="flex m-0 items-center ">
                        <div className="mr-2">{item.icon}</div> 
                        <div>{item.name}</div>
                    </div>
                </Link></li>)
            })}
        </ul>
    </div>
  )
}

export default Menu
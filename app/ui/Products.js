import Link from "next/link"
import Image from "next/image"

const Products = () => {
  return (
    <div className="p-6 bg-blue-100 mt-2 rounded-lg">
        <table className='w-full border-spacing-y-10'>
            <thead>
                <tr>
                    <td>
                        <Link href="/dashboard/products/addproduct"><button className="bg-white rounded-lg px-6 py-1 text-sm">
                            Add
                        </button></Link>
                    </td>
                </tr>
                <tr className=''>
                    <th className="">Title</th>
                    <th className="">Description</th>
                    <th className="">Price</th>
                    <th className="">Created At</th>
                    <th className="">Stock</th>
                    <th className="">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="flex ">
                            <Image className="mr-2" alt='userImg' src='/next-js-icon.png' width={25} height={10}/>
                            Product Name
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                            Product desc
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center ">
                            price 
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center ">
                            date
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center ">
                            stock
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                            <button className="bg-green-400 text-sm p-1">View</button>
                            <button className="bg-red-600 text-sm  p-1">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
  )
}

export default Products
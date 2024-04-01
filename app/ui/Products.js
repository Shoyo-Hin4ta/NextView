import Link from "next/link"
import Image from "next/image"
import fetchUsers, { fetchProducts } from "@/lib/models/data";

const Products = async() => {

    const products = await fetchProducts();
    console.log(products);
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
                {products.map(product => (
                <tr key={product.id}>
                    <td>
                        <div className="flex ">
                            <Image className="mr-2" alt='userImg' src='/next-js-icon.png' width={25} height={10}/>
                            {product.productName}
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center overflow-x-auto">
                            {product.productDesc}
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center ">
                            {product.price}  
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center ">
                            date
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center ">
                            {product.stock} 
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                            <Link href={`/dashboard/products/${product._id}`}><button className="bg-green-400 text-sm p-1">View</button></Link>
                            <button className="bg-red-600 text-sm  p-1">Delete</button>
                        </div>
                    </td>
                </tr>))}
            </tbody>

        </table>
    </div>
  )
}

export default Products
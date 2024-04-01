import { addProduct } from "@/lib/actions"

const ProductForm = () => {
    return (
      <form action={addProduct} className="bg-blue-100 h-full w-full p-4">
        <div className='h-full w-full grid grid-cols-2 grid-rows-5 gap-8 place-items-center overflow-auto'>
            <div className=''>
              <input placeholder='Product Name' name="productname" type='text' className='px-4 py-4 rounded-lg w-full'/>
            </div>
            <div>
                <select name="category" id="" className='rounded-lg px-4 py-4 '>
                    <option value="">Choose a category</option>
                    <option value="kitchen">Kitchen Appliances</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>           
            </div>
            <div className=''>
              <input placeholder='Price' type='number' name="price" className='px-4 py-4 rounded-lg' required/>
            </div>
            <div>
              <input placeholder='Stock' type='number' name="stock" className='px-4 py-4 rounded-lg' required/>
            </div>
            <div>
              <input placeholder='Size' type='text' name="size" className='px-4 py-4 rounded-lg' required/>
            </div>
            <div>
              <input placeholder='Color' type='text' name="color" className='px-4 py-4 rounded-lg' required/>
            </div>
            <div className=' p-2 col-span-2 row-span-2 h-full w-full'>
              <textarea placeholder='Product Description' name="productdesc" type='text' className='h-full w-full text-center rounded-lg px-16 py-4' />
            </div>
            <div className='text-center w-full col-span-2 p-2'>
              <button className='text-sm p-2 rounded-lg bg-blue-400 h-full w-full'>
                Add Product
              </button>
            </div>
        </div>
        </form>
      )
}

export default ProductForm
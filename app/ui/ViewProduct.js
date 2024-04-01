import Image from "next/image"

const ViewProduct = () => {
  return (
    <form action="" className="bg-blue-100 h-full w-full p-4">
    <div className=" grid grid-cols-6 grid-rows-9  gap-2 h-full w-full bg-blue-100 rounded-lg z-0">
      <div className="col-span-2 row-span-3 flex flex-col items-center h-full w-full">
              <Image src='/next-js-icon.png' alt="ProductPhoto" height={100} width={100} className="mt-10" />
              <span className="mt-2">Product Name</span>
      </div>

      <div className="col-span-4 w-full"><input className="w-full" name="productname" type="text" placeholder="Product Name" /></div>
      <div className="col-span-4 w-full">
          <select name="cartegory" id="" className='w-full '>
              <option value="">Update the category</option>
              <option value="kitchen">Kitchen Appliances</option>
              <option value="phone">Phone</option>
              <option value="computer">Computer</option>
          </select>           
      </div>      
      <div className="col-span-4 w-full"><input className="w-full" type="number" name="price" placeholder="Price"/></div>
      <div className="row-span-6 col-span-2"></div>
      <div className="col-span-4 w-full"><input className="w-full" type="number" name="stock" placeholder="Stock"/></div>
      <div className="col-span-4 w-full">
        <input className="w-full" type="text" placeholder="Size" name="size"/>
      </div>
      <div className="col-span-4 w-full">
        <input className="w-full" type="text" placeholder="Color" name="color"/>
      </div>
      <div className="col-span-4 row-span-2 w-full h-full"><textarea type="text" placeholder="Product Description" name="productdesc" className="w-full h-full text-balance"/></div>
      <div className="col-span-4 w-full text-center"><button className="bg-blue-300 w-full p-2">Update Product Info</button></div>
    </div>
    </form>
  )
}

export default ViewProduct



import Image from "next/image"


const ViewUser = () => {
  return (
    <div className=" grid grid-cols-6 grid-rows-8 place-items-center gap-2 h-full w-full bg-blue-100 rounded-lg z-0">
      <div className="col-span-2 row-span-3 flex flex-col items-center h-full w-full">
              <Image src='/next-js-icon.png' alt="ProfilePhoto" height={100} width={100} className="mt-10" />
              <span className="mt-2">Username</span>
      </div>

      <div className="col-span-4 border border-black w-full"><input className="w-full" type="text" placeholder="Username" /></div>
      <div className="col-span-4 w-full"><input className="w-full" type="text" placeholder="Email" /></div>
      <div className="col-span-4 w-full"><input className="w-full" type="text" placeholder="Password"/></div>
      <div className="row-span-5 col-span-2"></div>
      <div className="col-span-4 w-full"><input className="w-full" type="text" placeholder="Phone"/></div>
      <div className="col-span-2 w-full">
        <select name="isAdmin" id="" className="w-full">
            <option value="">Is Admin ? </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
      </div>
      <div className="col-span-2 w-full">
        <select name="isActive" id="" className="w-full">
            <option value="">Is Active ? </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
      </div>
      <div className="col-span-4 row-span-2 w-full h-full"><input type="text" placeholder="Address" className="w-full h-full text-center"/></div>
      <div className="col-span-4 w-full text-center"><button className="bg-blue-300 w-full p-2">Update User</button></div>
    </div>
  )
}

export default ViewUser
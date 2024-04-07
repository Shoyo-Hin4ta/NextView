import { addTransaction } from "@/lib/actions"
import { getSession } from "@/lib/helper"

const AddTransaction = () => {

    const userId =  getSession();
    
    return (
      <form action={addTransaction} className="bg-blue-100 h-full w-full p-4">
        <div className='h-full w-full grid grid-cols-2 grid-rows-5 gap-8 place-items-center overflow-auto'>
            <div className=''>
              <input placeholder='Name' name="name" type='text' className='px-4 py-4 rounded-lg w-full'/>
            </div>
            <input type="hidden" name="userId" value={userId}/>
            <div>
                <select name="status" id="" className='rounded-lg px-4 py-4 '>
                    <option value="">Status?</option>
                    <option value="pending">pending</option>
                    <option value="ongoing">ongoing</option>
                    <option value="fulfilled">fulfilled</option>
                    <option value="declined">declined</option>
                </select>           
            </div>
            <div className=' p-2 col-span-2 row-span-2 h-full w-full'>
              <textarea placeholder='About' name="about" type='text' className='h-full w-full rounded-lg px-16 py-4' />
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

export default AddTransaction
'use client'
import { updateStatus } from "@/lib/actions"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"



const Transactions = ({transactions}) => {



  const cssOnStatus = (status) => {
    if (status === "ongoing"){
      return "bg-yellow-300";
    }
    else if(status === "pending"){
      return "bg-slate-400";
    }
    else if(status === "declined"){
      return "bg-red-400";
    }
    else{
      return "bg-green-400"
    }
  }

  const path = usePathname();
  // console.log(transactions[0]._id)

  const onStatusChange = async(e, transaction) => {
    
    await updateStatus(e, transaction)

  }

  return (
    <div className="p-6 bg-blue-100 mt-2 rounded-lg bg-yello">
      <table className="w-full ">
        <thead>
          { path === "/dashboard/transactions" ? (
            <tr>
            <td>
                <Link href="/dashboard/transactions/addtransaction"><button className="bg-white rounded-lg px-6 py-1 text-sm">
                    Add
                </button></Link>
            </td>
        </tr>
          ) : null}
          <tr>
            <th className="w-2/5 ">Name</th>
            <th className="w-1/5">Status</th>
            <th className="w-1/5">Date</th>
            <th className="w-1/5">About</th>
          </tr>
        </thead>
        <tbody className="">
        {transactions.map(transaction => (
            <tr key={transaction._id} className="">
            <td>
            <div className="flex items-center justify-center ">
              <Image className="mr-2" alt='userImg' src='/next-js-icon.png' width={25} height={10}/>
              {transaction.name}
            </div>
          </td>
          <td>
            {console.log(cssOnStatus(transaction.status))}
            <div className="flex justify-center items-center">
              {path === "/dashboard/transactions" ? (
                <select onChange={(e) => onStatusChange(e.target.value, transaction)} name="status" id="" className={`rounded-lg px-4 py-4 ${cssOnStatus(transaction.status)} p-1`}>
                <option value="">{transaction.status}</option>
                <option value="pending">pending</option>
                <option value="ongoing">ongoing</option>
                <option value="fulfilled">fulfilled</option>
                <option value="declined">declined</option>
              </select>
              ): <span className={`rounded-lg px-4 py-4 ${cssOnStatus(transaction.status)} p-1`}>{transaction.status}</span>}
            </div>
          </td>
          <td>
            <div className="flex justify-center items-center">
              {transaction.createdAt.slice(0,10)}
            </div>
          </td>
          <td>
            <div className="flex justify-center items-center overflow-auto">
              {transaction.about}
            </div>
          </td>
        </tr>
          )
        )}
        </tbody>
      </table>

    </div>
  )
}

export default Transactions
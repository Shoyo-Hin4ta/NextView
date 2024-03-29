import Image from "next/image"


const Transactions = () => {
  return (
    <div className="p-6 bg-blue-100 mt-2 rounded-lg">
      <table className="w-full ">
        <thead>
          <tr>
            <th className="w-2/5 ">Name</th>
            <th className="w-1/5">Status</th>
            <th className="w-1/5">Date</th>
            <th className="w-1/5">About</th>
          </tr>
        </thead>
        <tbody className="">
        <tr className="">
          <td>
            <div className="flex items-center ">
              <Image className="mr-2" alt='userImg' src='/next-js-icon.png' width={25} height={10}/>
              Name
            </div>
          </td>
          <td>
            <div className="flex justify-center items-center">
              Pending
            </div>
          </td>
          <td>
            <div className="flex justify-center items-center">
              Curr Date
            </div>
          </td>
          <td>
            <div className="flex justify-center items-center">
              About
            </div>
          </td>
        </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Transactions
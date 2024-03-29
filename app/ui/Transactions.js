import Image from "next/image"


const Transactions = () => {
  return (
    <div className="p-6">
      <table className="w-full border border-black">
        <thead>
          <th className="w-2/5 ">Name</th>
          <th className="w-1/5">Status</th>
          <th className="w-1/5">Date</th>
          <th className="w-1/5">About</th>
        </thead>
        <tr>
          <td>
            <div className="flex">
              <Image className="mr-2" alt='userImg' src='/next-js-icon.png' width={25} height={10}/>
              Name
            </div>
          </td>
          <td>
            <div>
              Pending
            </div>
          </td>
          <td>
            <div>
              Curr Date
            </div>
          </td>
          <td>
            <div>
              About
            </div>
          </td>
        </tr>
      </table>

    </div>
  )
}

export default Transactions
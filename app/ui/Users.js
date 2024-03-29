import Image from 'next/image'
import Link from 'next/link'

const Users = () => {
  return (
    <div className="p-6 bg-blue-100 mt-2 rounded-lg">
        <table className='w-full border-spacing-y-10'>
            <thead>
                <tr>
                    <td>
                        <Link href="/dashboard/users/adduser"><button className="bg-white rounded-lg px-6 py-1 text-sm">
                            Add
                        </button></Link>
                    </td>
                </tr>
                <tr className=''>
                    <th className="">Name</th>
                    <th className="">Email</th>
                    <th className="">Created At</th>
                    <th className="">Role</th>
                    <th className="">Status</th>
                    <th className="">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="flex ">
                            <Image className="mr-2" alt='userImg' src='/next-js-icon.png' width={25} height={10}/>
                            Name
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                            name@gmail.com
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center ">
                            date
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center ">
                            admin
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center ">
                            active
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center">
                            <button className="bg-green-400 text-sm p-2">View</button>
                            <button className="bg-red-600 text-sm  p-2">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
  )
}

export default Users
import Sidebar from '../ui/Sidebar'
import Navbar from '../ui/Navbar'
const layout = ({children}) => {
  return (
    <div className='border border-black flex h-screen w-screen'>
      <div className='flex-4'>
          <Sidebar/>
      </div>
      <div className='flex-1 mx-2 flex flex-col'>
        <Navbar/>
        <div className='flex-1 mt-2'>
          {children}
        </div>
        
      </div>
</div>
  )
}

export default layout
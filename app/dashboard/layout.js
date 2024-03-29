import Sidebar from '../ui/Sidebar'
import Navbar
 from '../ui/Navbar'
const layout = ({children}) => {
  return (
    <div className='border border-black flex'>
      <div className='flex-4'>
          <Sidebar/>
      </div>
      <div className='flex-1 mx-2'>
        <Navbar/>
        {children}
      </div>
</div>
  )
}

export default layout
import ViewProduct from "@/app/ui/ViewProduct"


const page = ({params}) => {
  // console.log(params.id)
  return (
    <ViewProduct id = {params.id}/>
  )
}

export default page
import ViewUser from "@/app/ui/ViewUser";

const page = ({params}) => {
    console.log(params.id);
  return (
    <ViewUser id = {params.id}/>
  )
}

export default page
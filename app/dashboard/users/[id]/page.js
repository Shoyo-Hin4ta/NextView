import ViewUser from "@/app/ui/ViewUser";

const page = ({params}) => {
    console.log(params.id);
  return (
    <ViewUser/>
  )
}

export default page
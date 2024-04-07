import Transactions from "@/app/ui/Transactions"
import { getSession } from "@/lib/helper";
import { fetchTransactions } from "@/lib/models/data";

const page = async() => {
  const userId= getSession();
  // console.log(userId)
  const transactions = await fetchTransactions(userId);
  // console.log(transactions)
  const value = JSON.parse(JSON.stringify(transactions));
  console.log(Array.isArray(value));
  return (
    <Transactions transactions = {JSON.parse(JSON.stringify(transactions))}/>
  )
}

export default page
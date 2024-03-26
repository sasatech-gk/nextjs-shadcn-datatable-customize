import { Payment, columns } from "./columns"
import { DataTable } from "@/components/data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 1,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 2,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 3,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 4,
      status: "pending",
      email: "m@example.com",
    },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
import { User, columns } from "./columns"
import { DataTable } from "@/components/data-table"

async function getData(): Promise<User[]> {
  return [
    {
      id: "728ed52f",
      email: "a@example.com",
    },
    {
      id: "728ed52f",
      email: "b@example.com",
    },
    {
      id: "728ed52f",
      email: "c@example.com",
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
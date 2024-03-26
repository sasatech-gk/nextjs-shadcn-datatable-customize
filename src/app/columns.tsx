"use client"

import { ColumnDef} from "@tanstack/react-table"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}
import SortButton from "@/components/data-table/sort-button";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: ({column}) => <SortButton column={column} label="Status" />
  },
  {
    accessorKey: "email",
    header: ({column}) => <SortButton column={column} label="email" />
  },
  {
    accessorKey: "amount",
    header: ({column}) => <SortButton column={column} label="Amount" />
  },
]


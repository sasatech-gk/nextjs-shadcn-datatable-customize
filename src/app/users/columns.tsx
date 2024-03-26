"use client"

import { ColumnDef} from "@tanstack/react-table"


export type User = {
  id: string
  email: string
}
import SortButton from "@/components/data-table/sort-button";
import LinkButton from "@/components/data-table/link-button";

export const columns: ColumnDef<User>[] = [
  {
    id: "view",
    cell: ({row}) => <LinkButton href={`/users/${row.original.id}`}/>
  },
  {
    accessorKey: "id",
    header: ({column}) => <SortButton column={column} label="id" />

  },
  {
    accessorKey: "email",
    header: ({column}) => <SortButton column={column} label="email" />
  },
]


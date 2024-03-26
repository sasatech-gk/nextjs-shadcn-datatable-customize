"use client"

import {Column} from "@tanstack/react-table";
import {Button} from "@/components/ui/button";
import {ArrowDown, ArrowUp} from "lucide-react";

export default function SortButton<T>({
  column,
  label,
}: {
  column: Column<T>
  label: string
}) {
  return (
    <Button
      variant={"ghost"}
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {label}
      {column.getIsSorted() === "asc" ? (
        <ArrowUp className="ml-2 h-4 w-4" />
      ) : (
        <ArrowDown className="ml-2 h-4 w-4" />
      )}
    </Button>
  )
}
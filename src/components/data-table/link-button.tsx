"use client"

import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";
import Link from "next/link";
import type { UrlObject } from 'url';

export default function LinkButton({
  href
}: {
  href: string | UrlObject;
}) {
  return (
    <Link href={href} prefetch={false}>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </Link>
  );
}
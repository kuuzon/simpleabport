import Link from "next/link"

import { Icons } from "@/components/utility/icons"

export default function ProjectItem({
  name,
  description,
  htmlUrl,
  starCount,
  forkCount,
  watcherCount,
}: {
  name: string
  description: string
  htmlUrl: string
  starCount: number
  forkCount: number
  watcherCount: number
}) {
  return (
    <Link
      href={htmlUrl}
      target="_blank"
      className="delay-50 relative overflow-hidden rounded-lg border bg-background p-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-slate-400 hover:shadow-md"
    >
      <div className="flex min-h-[180px] flex-col justify-between rounded-md p-6">
        <div className="space-y-2">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex flex-row justify-between">
          <span className="flex items-center text-muted-foreground">
            <Icons.star className="mr-2 h-3 w-3" />
            <span className="mt-0.5 text-xs">{starCount}</span>
          </span>
          <span className="flex items-center text-muted-foreground">
            <Icons.fork className="mr-2 h-3 w-3" />
            <span className="mt-0.5 text-xs">{forkCount}</span>
          </span>
          <span className="flex items-center text-muted-foreground">
            <Icons.eye className="mr-2 h-3 w-3" />
            <span className="mt-0.5 text-xs">{watcherCount}</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

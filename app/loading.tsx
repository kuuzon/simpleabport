import { Fragment } from "react"
import Link from "next/link"

import { Skeleton } from "@/components/ui/skeleton"
import Contact from "@/components/layout/contact"
import Landing from "@/components/layout/landing"
import { Icons } from "@/components/utility/icons"

export default function Loading() {
  return (
    <Fragment>
      <Landing />
      <section
        id="projects"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="mb-3 text-3xl font-bold leading-[1.1] tracking-tight sm:text-3xl md:text-6xl">
            Projects
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {Array.from({ length: 9 }, (_, i) => i + 1).map((id) => (
            <Link
              key={id}
              href="#"
              target="_blank"
              className="delay-50 relative overflow-hidden rounded-lg border bg-background p-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-slate-400 hover:shadow-md"
            >
              <div className="flex min-h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-1/2"></Skeleton>
                  <Skeleton className="w-100 h-16"></Skeleton>
                </div>
                <Skeleton className="w-100 h-6"></Skeleton>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Contact />
    </Fragment>
  )
}

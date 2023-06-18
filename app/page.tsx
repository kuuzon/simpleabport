import { Fragment } from "react"
import ProjectsList from "@/components/feature/projectsList"

export default function HomePage() {
  return (
    <Fragment>
      {/* MAIN TITLE */}
      <section
        id="hero"
        className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32"
      >
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            alex bicknell
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I build standards-based <span className="font-semibold">web apps</span> & teach others how to do the same
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <ProjectsList />

      {/* CONTACT */}
      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-3xl md:text-6xl">
            Get in Touch?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Feel free to throw me a line on any of my professional dev socials above.
          </p>
        </div>
      </section>
    </Fragment>
  )
}

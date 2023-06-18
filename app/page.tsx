import { Fragment } from "react"

import ProjectsList from "@/components/feature/projectsList"
import Landing from "@/components/layout/landing"
import Contact from "@/components/layout/contact"

export default function HomePage() {
  return (
    <Fragment>
      <Landing />
      <ProjectsList />
      <Contact />
    </Fragment>
  )
}
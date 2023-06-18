import ProjectItem from "./projectItem"

type Repo = {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
}

const getRepos = async (): Promise<Repo[]> => {
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  }
  const res = await fetch("https://api.github.com/users/kuuzon/repos", {
    headers,
  })
  if (!res.ok) {
    throw new Error("Failed to Fetch: Check Endpoint Return")
  }
  // Loading timeout
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const data = await res.json()
  return data
}

export default async function ProjectsList() {
  const repos = await getRepos()
  return (
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
        {repos.map((repo) => (
          <ProjectItem
            key={repo.id}
            name={repo.name}
            description={repo.description}
            htmlUrl={repo.html_url}
            starCount={repo.stargazers_count}
            forkCount={repo.forks_count}
            watcherCount={repo.watchers_count}
          />
        ))}
      </div>
    </section>
  )
}

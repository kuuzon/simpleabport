import Link from "next/link"

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-28 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-col md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            <span className="font-medium">Alpha Build</span> &copy; 2023-{getCurrentYear()}{" "} Alex Bicknell
          </p>
          <p className="text-center text-xs leading-loose text-muted-foreground md:text-left">
            Base UI Attribution |{" "}
            <Link className="font-medium" href="https://github.com/shadcn/ui" target="_blank">
              Shadcn UI
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

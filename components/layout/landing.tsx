export default function Landing() {
  return (
    <section
      id="hero"
      className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32"
    >
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          alex bicknell
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          I build standards-based{" "}
          <span className="font-semibold">web apps</span> & teach others how to
          do the same
        </p>
      </div>
    </section>
  )
}

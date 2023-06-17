import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      {/* MAIN TITLE */}
      <section
        id='hero'
        className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'
      >
        <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
          <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
            Alex Bicknell
          </h1>
          <p className='text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8'>
            I build things
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id='projects'
        className='container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            Projects
          </h2>
        </div>
        <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
          <div className='bg-background relative overflow-hidden rounded-lg border p-2'>
            <div className='flex min-h-[180px] flex-col justify-start rounded-md p-6'>
              <div className='space-y-2'>
                <h3 className='font-bold'>Project 1</h3>
                <p className='text-sm'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                  magni fuga magnam nam, possimus cum ratione alias corrupti
                  nisi. Et!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id='contact' className='container py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            Get in Touch?
          </h2>
          <p className='text-muted-foreground max-w-[85%] leading-normal sm:text-lg sm:leading-7'>
            Feel free to throw me a line on any of my professional dev socials
            below.
          </p>
        </div>
      </section>
    </Fragment>
  );
}
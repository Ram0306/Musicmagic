import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function Herosection() {
  return (
    <div className='text-2xl text-white h-auto md:h-[40rem] w-full rounded-md items-center justify-center overflow-hidden mx-auto py-10 md:py-20  mt-20'>

        <Spotlight
        className="-top-60 left-0 md:left-60 md:-top-20"
        fill="white"
          />
        <div className='p-4 relative z-10 w-full text-center '>
            <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50'>
              Master the art of music</h1>
            <p className='mt-5 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
  &ldquo;Master the Art of Music  &ldquo; is a journey into the depths of musical craftsmanship, a comprehensive guide designed to empower musicians of all levels. This book delves into the nuances of music theory, performance techniques, composition strategies, and the rich history of various musical genres.</p>
                 <div className='mt-4'>
                    <Link href={"/courses"}>
                        <Button borderRadius="1.75rem" 
                        className="bg-black dark:bg-black text-white dark:text-white border-neutral-200 dark:border-slate-800">
                           Explore Course
                        </Button>
                    </Link>
                 </div>
        </div>
    </div>
  )
}

export default Herosection

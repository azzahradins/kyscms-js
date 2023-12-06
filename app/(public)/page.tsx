'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/Forms'
import Link from 'next/link'

export default function LandingPage (): JSX.Element {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 grid-cols-1 text-prplprimary dark:text-prplDPrimary" >
        <section className="flex flex-col gap-6 lg:gap-12 order-last lg:order-first">
          <h1 className='text-center lg:text-start'>
            Easy way to control content on your website
          </h1>
          <h3 className='text-center lg:text-start text-prplsecondary dark:text-prplDsecondary'>
            A improved tools that can help you stay organized and manage your tasks efficiently. Take control of your task and achieve your goals with our new interface.
          </h3>
          <div className='place-self-center lg:place-self-start'>
            <Link href={'/dashboard'}>
              <Button variant='prplAlt' text='Access Dashboard' type='button'/>
            </Link>
          </div>
        </section>
        <section className='relative order-first lg:order-last'>
          <motion.img
            className='opacity-30 top-8 relative w-1/3'
            src='pattern-plus.svg'
            animate={{
              x: [10, -15, 10],
              transition: { repeat: Infinity, repeatDelay: 1.5, duration: 6 }
            }}/>
          <motion.img
            className='opacity-30 -top-12 relative float-right w-1/3'
            src='pattern-triangle.svg'
            animate={{
              x: [-15, 10, -15],
              transition: { repeat: Infinity, repeatDelay: 1.5, duration: 6 }
            }}/>
          <div className='w-full h-52 border-red-400'>
            <Image src={'camping.svg'}
              fill
              alt='placeholder'
              sizes='fill'/>
          </div>
        </section>
      </div>
    </div>
  )
}

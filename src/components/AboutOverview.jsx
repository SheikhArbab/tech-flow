import React from 'react'
import { aboutOverview } from '@/constants/index'

const AboutOverview = () => {
  return (
    <section className='mx-auto px-8 sm:px-0 container py-24 flex flex-col gap-24'>
      {aboutOverview.map((v, i) => <div key={i}
        className='flex flex-wrap items-start gap-6'>

        <img className='flex-1  md:h-96 object-cover ' src={v.image} alt="" />
        <div className='md:w-[60%]'>
          <h1 className='font-semibold md:text-3xl mb-6'>{v.title}</h1>
          <p className='text-xs md:text-xl opacity-70 md:leading-relaxed'>{v.description}</p>
        </div>
      </div>)}
    </section>
  )
}

export default AboutOverview

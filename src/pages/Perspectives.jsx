import React from 'react'
import { Hero, Banner } from '@/components/index'

const Perspectives = () => {
  return (
    <>
            <Hero
                heroHeading={'Perspectives'}
                heroLine={`Practical thinking and advice rooted in real experiences, data, and results`}
                btnTitle={'Let’s Get To Work'}
                btnLink={'/contact'}
            />
            <Banner
                heading={`Tech Flow LLc 2024 Industry Outlooks`}
                line={`Businesses will face challenges and opportunities in 2024. The common language across industries? A focus on efficiency, optimized workforce management, and innovation in a digital world.
                `}
                btnTitle={'Explore What’s New'}
                btnLink={'/about'}
            />
        </>
  )
}

export default Perspectives

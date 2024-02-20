import React from 'react'
import { Hero, Banner } from '@/components/index'

const Careers = () => {
  return (
    <>
            <Hero
                heroHeading={'Careers'}
                heroLine={`Learn everything West Monroe has to offer, from a supportive, collaborative culture, to teammates who grow with you, to outstanding benefits and flexible hybrid working`}
                btnTitle={'Let’s Get To Work'}
                btnLink={'/contact'}
            />
            <Banner
                heading={`Where inclusion and diversity meets accountability`}
                line={`At West Monroe, I&D is a everyone’s priority—and a core business metric. It’s a place where you can count on inclusive leadership.`}
                btnTitle={'Explore What’s New'}
                btnLink={'/about'}
            />
        </>
  )
}

export default Careers

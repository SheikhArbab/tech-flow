import React from 'react'
import { heroVid, heroPoster } from '@/assets/index'
import { Hero, HomeCard, HomeInfo, HomeMarquee, HomeSlider, HomeClient, HomeContact } from '@/components/index'
import { heroHeading, heroLine } from '@/constants/index'

const Home = () => {
  return (
    <>
      <Hero
        heroVid={heroVid}
        heroPoster={heroPoster}
        heroHeading={heroHeading}
        heroLine={heroLine}
        btnTitle={'Our Approach'}
        btnLink={'/about'}
      />
      <HomeCard />
      <HomeSlider />
      <HomeInfo />
      <HomeMarquee />
      <HomeClient />
      <HomeContact />
    </>
  )
}

export default Home

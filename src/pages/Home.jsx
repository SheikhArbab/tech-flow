import React from 'react'
import { heroVid, heroPoster } from '@/assets/index'
import { Hero, HomeCard, Info, HomeMarquee, HomeSlider, HomeClient, HomeContact } from '@/components/index'
import { heroHeading, heroLine, homeInfo } from '@/constants/index'


const Home = () => <>
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
  <Info heading={homeInfo[0]} line={homeInfo[1]} link={'/contact'} btn={'contact us'} />
  <HomeMarquee />
  <HomeClient />
  <HomeContact />
</>

export default Home

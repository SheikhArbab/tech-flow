import React from 'react'
import { Hero, FooterTopBnr, Banner, AboutOverview, Info } from '@/components/index'


const About = () => <>
    <Hero heroHeading={'About Us'} heroLine={'West Monroe brings the possible into the present'} btnTitle={'Let’s Get To Work'} btnLink={'/contact'} />
    <AboutOverview />
    <Info heading={'Bring the Possible Into the Present'} line={'What does it mean to bring the possible into the present? It’s about turning your dreams into reality. Making the ideal practical. Setting new standards to enchant your customers and exceed your goals.'} />
    <Banner
        heading={'Our Perspectives'}
        line={'We are challengers, explorers, and innovators—and we want to share that with you. Read our proprietary research, insights on the latest trends, executive interviews, and more.'}
        btnTitle={'Explore What’s New'}
        btnLink={'/perspectives'}
    />
    <FooterTopBnr heading={`Want to learn more?`} btnTitle={'Contact Us'} btnLink={'/contact'} />
</>


export default About

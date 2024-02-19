import React from 'react'
import { Hero, FooterTopBnr, Banner } from '@/components/index'

const About = () => {
    return (
        <div>
            <Hero
                heroHeading={'About Us'}
                heroLine={'West Monroe brings the possible into the present'}
                btnTitle={'Let’s Get To Work'}
                btnLink={'/contact'}
            />
            <Banner
                heading={'Our Perspectives'}
                line={'We are challengers, explorers, and innovators—and we want to share that with you. Read our proprietary research, insights on the latest trends, executive interviews, and more.'}
                btnTitle={'Explore What’s New'}
                btnLink={'/about'}
                />
            <FooterTopBnr heading={`Want to learn more?`} btnTitle={'Contact Us'} btnLink={'/perspectives'} />
        </div>
    )
}

export default About

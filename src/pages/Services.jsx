import React from 'react'
import { Hero, Banner } from '@/components/index'

const Services = () => {
    return (
        <>
            <Hero
                heroHeading={'Strategic Visioning'}
                heroLine={'From innovative strategies to aligned action​'}
                btnTitle={'Let’s Get To Work'}
                btnLink={'/contact'}
            />
            <Banner
                heading={`Don't do digital. Be digital.`}
                line={`It takes digital thinking to drive real change. Learn how you can stop failing at digital transformation projects and become a digital business.`}
                btnTitle={'Explore What’s New'}
                btnLink={'/perspectives'}
            />
        </>
    )
}

export default Services

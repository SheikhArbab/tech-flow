import React from 'react'
import { Hero, Banner } from '@/components/index'

const Industries = () => {
    return (
        <>
            <Hero heroHeading={'Industries'} heroLine={`Industry expertise accelerates success. Without it, essential context gets missed and results fall flat. That's why we bring it—every time.`} />

            <Banner
                heading={`Don't do digital. Be digital.`}
                line={`It takes digital thinking to drive real change. Learn how you can stop failing at digital transformation projects and become a digital business.`}
                btnTitle={'Explore What’s New'}
                btnLink={'/perspectives'}
            />
        </>
    )
}

export default Industries

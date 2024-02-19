import React from 'react'
import { marqueeImageLinks } from '@/constants/index'
import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
    return (

        <Marquee pauseOnHover={true}>
            <figure className='flex items-center py-20 mx-auto'>
                {marqueeImageLinks.map((v, i) => <img
                        key={i}
                        src={v}
                        className='mx-8 opacity-50 hover:opacity-100 duration-300 transition-all w-32 h-32 aspect-auto object-contain flex items-center justify-center object-center'
                    />
                )}
            </figure>
        </Marquee>
    )
}

export default HomeMarquee

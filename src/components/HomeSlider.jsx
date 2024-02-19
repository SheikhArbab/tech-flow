import React from 'react'
import { HomeCarouselData } from '@/constants/index'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";

const HomeSlider = () => {
    return (
        <div className='bg-gray-100 py-8'>
            <div className="container mx-auto bg-white p-8">
                <h1 className='capitalize text-5xl '>Creating For Impact</h1>
                <p className='my-8 max-w-[33em] opacity-80 text-xl'>We start with the end in mind so we can meet or exceed outcomes. Here are just a few ways we're driving tangible value.</p>
                <Marquee pauseOnHover={true}>
                    <div className='w-full flex gap-6'>
                        {HomeCarouselData.map((v, i) => <figure className='w-96 h-96 relative before:block before:w-96 before:h-96 hover:before:bg-black/50 before:absolute before:top-0 before:left-0 before:duration-300 before:transition-all'
                            key={i}>

                            <img
                                className="w-full h-full"
                                src={v.url} />

                            <div className="w-full flex-wrap h-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white flex items-center justify-between px-4">
                                <h1 className='text-[350%]'>{v.revenue}</h1>
                                <span className=''>
                                    <p className=' mb-2 '> {v.description}</p>
                                    <Link to={v.link} className='text-xs font-semibold tracking-wider border-0 border-b-2 hover:border-b-4 border-primary'>
                                        Learn more
                                    </Link>
                                </span>
                            </div>

                        </figure>)}
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default HomeSlider

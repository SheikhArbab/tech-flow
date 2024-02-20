import React from 'react'
import { bannerImage } from '@/assets/index'
import { Link, NavLink } from 'react-router-dom'

const Banner = ({ heading, line, btnTitle,  btnLink, image }) => {
    return (
        <section className='h-fit w-full'>
            <figure className="h-[80dvh] bg-black relative">
                <img className='w-full h-full object-cover opacity-50' src={image ? image : bannerImage} alt="" />
                <div className='absolute top-1/2 container px-6 sm:px-0 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white'>
                    {heading && <h1 className='w-fit font-bold md:text-6xl relative before:absolute before:-top-3 before:left-0 before:bg-primary before:w-[30%] before:h-2'>{heading}</h1>}
                    {line && <p className='md:w-[45%] md:leading-relaxed md:text-xl my-6'>{line}</p>}
                    {btnTitle && <NavLink to={btnLink}  className='btn px-3 w-fit py-2 rounded-md text-xs md:text-xl block' >{btnTitle}</NavLink>}
                </div>

            </figure>
        </section>
    )
}

export default Banner

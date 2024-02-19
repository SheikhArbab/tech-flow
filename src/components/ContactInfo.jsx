import React from 'react'
import { Link } from 'react-router-dom'
import { footerSocialLink } from '@/constants/index'

const ContactInfo = () => {
    return (
        <div className='flex-1'>
            <h1 className='text-secondary font-semibold text-3xl py-3 w-full border-0 border-gray-200 border-b-2 mb-4'>More ways to connect</h1>
            <div>
                <h1 className='font-semibold text-2xl opacity-80 mb-2'>Follow us</h1>
                <ul className='flex flex-wrap gap-4 md:gap-8 items-center my-8'>
                    {footerSocialLink && footerSocialLink.map((v, i) => <li key={i}>
                        <button
                            className='rounded-full bg-secondary w-8 h-8 text-white duration-300 transition-all hover:text-primary flex items-center justify-center'
                            onClick={() => window.open(v.link, '_blank')}><v.Icon /></button></li>)}
                </ul>
                <Link className='my-8 block font-semibold tracking-wider border-0 border-b-2 hover:border-primary w-fit' to={'/offices'}>See where we are</Link>

                <button ></button>
            </div>
        </div>
    )
}

export default ContactInfo

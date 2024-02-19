import React from 'react'
import { Logo } from '@/components/index'
import { footerSocialLink, footerBottomLinks } from '@/constants/index'
import { Link } from 'react-router-dom'

const Footer = () => {

    const currentData = new Date()

    return (
        <footer className='w-full bg-gray-100  sm:p-0 px-4'>
            <div className='container mx-auto py-8'>
                <div className='flex flex-wrap items-center justify-between py-8 border-0  border-b border-gray-300 gap-4'>
                    <Logo />
                    <ul className="flex items-center gap-8 flex-wrap">
                        {footerSocialLink.map((v, i) => <li key={i}
                            className='opacity-70 hover:opacity-100 duration-300 transition-all text-2xl cursor-pointer'
                            onClick={() => window.open(v.link, '_blank')}><v.Icon /></li>)}
                    </ul>
                </div>
                <div className='flex flex-wrap items-center justify-between py-8 gap-8'>
                    <p className='font-semibold text-xs opacity-85 tracking-wide'>&copy; {currentData.getFullYear()} Tech Flow LLc. All Rights Reserved</p>
                    <ul className='flex items-center gap-6 flex-wrap'>
                        {footerBottomLinks.map((v, i) => <li key={i}
                            className='capitalize font-semibold opacity-85 text-xs md:text-sm hover:text-primary transition-all duration-300'
                        ><Link to={v.link}>{v.title}</Link></li>)}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

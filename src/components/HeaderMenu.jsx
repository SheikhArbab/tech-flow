import React from 'react'
import { Logo } from '@/components/index'
import { IoClose } from "react-icons/io5";

const HeaderMenu = ({ menu, setMenu, HeaderLinks, HeaderLinksB }) => {
    return (
        <div
             className={`${menu && 'inset-0 opacity-100'} fixed  z-[102] bg-secondary/70 overflow-hidden duration-300 opacity-0`}>

            <div    onClick={() => {
                setMenu(!menu)
            }} className='flex justify-end h-full '></div>



            <div
                className={`${!menu && 'translate-x-[100dvw]'} bg-secondary absolute top-0 bottom-0 right-0 w-[100%] md:w-[40%] px-6 py-8 transition-all duration-300`}>
                <Logo color='white' />
            </div>

            <span
                onClick={() => {
                    setMenu(!menu)
                }}
                className={`${menu ? 'right-3 md:right-[42%]' : '-right-96'} duration-300 hover:text-primary text-white transition-all  absolute top-8 cursor-pointer text-4xl font-semibold`}>
                <IoClose size={'1.2em'} />
            </span>
        </div>
    )
}

export default HeaderMenu

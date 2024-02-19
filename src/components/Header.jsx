import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi"; 
import { HeaderLinks, HeaderLinksB } from '@/constants/index'
import { HeaderMenu,Logo } from '@/components/index'

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 30);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <HeaderMenu
                menu={menu}
                setMenu={setMenu}
                HeaderLinks={HeaderLinks}
                HeaderLinksB={HeaderLinksB}
            />

             <nav className={`${isScrolled ? 'h-fit' : 'h-0'} overflow-hidden  shadow-2xl shadow-gray-900 fixed w-screen bg-secondary flex items-center justify-center top-0 right-0 z-[100] transition-all duration-300 sm:p-0 px-4`}>
                <div className='container flex items-center justify-between mx-auto py-4' >
                    <Logo color={'white'} />

                    <div className="text-primary text-2xl font-semibold cursor-pointer flex items-center gap-3">
                   
                        <HiMenuAlt3
                            onClick={() => {
                                setMenu(!menu)
                            }}
                        />
                    </div>
                </div>
            </nav> 
                <nav className={` container absolute top-0 left-[50%] z-40 text-white translate-x-[-50%] sm:p-0 px-4`}>
                    <div className='flex justify-end xl:py-4 border-0 xl:border-gray-300 xl:border-b-2 '>
                        <ul className='xl:flex gap-6 items-center hidden'>
                            {HeaderLinks.map((c, i) => (<li
                                className='hover:text-primary duration-300 transition-all capitalize'
                                key={i}>
                                <NavLink
                                    to={c.link}>
                                    {c.title}
                                </NavLink>
                            </li>
                            ))}
                            <li><IoMdSearch className='text-primary text-2xl font-bold' /></li>
                        </ul>
                    </div>
                    <div className='flex items-center justify-between py-6'>
                        <Logo />
                        <span
                            onClick={() => {
                                setMenu(!menu)
                            }}
                            className='xl:hidden text-2xl cursor-pointer hover:text-primary transition-all duration-200'><HiMenuAlt3 /></span>
                        <ul className='xl:flex gap-6 items-center hidden'>
                            {HeaderLinksB.map((c, i) => (<li
                                className='relative flex flex-col justify-end items-end duration-300 transition-all uppercase font-bold text-sm group before:w-full hover:before:bg-primary before:block before:absolute before:h-[2px] rounded-md before:-bottom-0  h-10 pb-2 overflow-hidden hover:overflow-visible'
                                key={i}>
                                <NavLink
                                    to={c.link}>
                                    {c.title}

                                </NavLink>
                                {c.list && <div className={`p-8 bg-secondary  absolute w-[55dvw] top-10 h-0 group-hover:h-fit duration-300  overflow-hidden`}>
                                    <ul className="border-0 border-t-2 border-gray-500 pt-[10px] flex flex-wrap h-full gap-5 justify-between">
                                        {Array.isArray(c.list) && c.list.length > 0 &&
                                            c.list?.map(v => (
                                                <li key={v.title} className={`hover:text-primary text-xs font-light w-44`}>
                                                    <NavLink to={v.link}>
                                                        {v.title}
                                                    </NavLink>
                                                </li>
                                            ))}
                                    </ul>

                                </div>}
                            </li>
                            ))}</ul>
                    </div>
                </nav>
                
        </>
    )
}

export default Header

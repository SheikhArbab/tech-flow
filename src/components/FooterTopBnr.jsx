import React from 'react'
import { Link } from 'react-router-dom'

const FooterTopBnr = ({ heading, btnTitle, btnLink }) => <section
    className='w-full py-32 flex items-center justify-center bg-gradient-to-r from-secondary to-primary/85'>
    <div className="contianer mx-auto sm:px-0 px-8 flex flex-col items-center justify-center gap-5 text-white">
        <h1 className='font-semibold text-xl'>{heading}</h1>
        {btnTitle && <Link className='btn px-3 w-fit py-2 rounded-md' to={btnLink}>{btnTitle}</Link>}
    </div>
</section>

export default FooterTopBnr

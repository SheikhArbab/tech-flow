import React from 'react'
import { Link } from 'react-router-dom'

const Info = ({ heading, line, link, btn }) => <div
    className='w-full h-screen flex items-center justify-center flex-col text-center bg-gray-100'>
    <h1 className='font-bold md:text-[3dvw] capitalize max-w-3xl leading-relaxed'>{heading}</h1>
    <p className='capitalize max-w-3xl my-2 text-xs md:text-sm px-2'>{line}</p>
    <Link to={link}>{btn && <button className='btn px-3 w-fit py-2 rounded-md'>{btn}</button>}</Link>
</div>

export default Info

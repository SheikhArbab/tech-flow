import React from 'react'
import { logo } from '@/assets/index'
import { Link } from 'react-router-dom'

const Logo = ({ color }) => {
    return (
        <Link to={'/'}>
            <figure
                className='flex items-center h-12 w-fit gap-1'>
                <img
                    className='h-full '
                    src={logo} />
                <figcaption
                    className={`text-${color && color} font-bold text-2xl`}>
                    Tech <span className='text-primary'>Flow</span>
                </figcaption>
            </figure>
        </Link>
    )
}

export default Logo

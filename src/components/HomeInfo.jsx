import React from 'react'
import { Link } from 'react-router-dom'
import { homeInfo } from '@/constants/index'

const HomeInfo = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center flex-col text-center bg-gray-100'>

            <h1 className='font-bold md:text-[3dvw] capitalize max-w-3xl leading-relaxed '>{homeInfo[0]}</h1>
            <p className='capitalize max-w-3xl my-2 text-xs md:text-sm px-2'>{homeInfo[1]}</p>
            <Link to={'/contact'}>
                <button className='btn px-3 w-fit py-2 rounded-md'>
                    contact us
                </button>
            </Link>

        </div>
    )
}

export default HomeInfo

import React from 'react'
import { homeClient } from '@/constants/index'
import { Link } from 'react-router-dom'

const HomeClient = () => {

  return (
    <section className='w-full bg-gray-100 py-20'>
      <div className="container mx-auto sm:p-0 px-4">
        <div className='flex flex-wrap justify-between border-0 border-gray-200 border-t-2 py-10'>
          <h6 className='font-semibold text-2xl'>{homeClient.title}</h6>
          <div className="w-[80%]">
            <h1 className='md:text-4xl my-2 leading-normal'>{homeClient.heading}</h1>
            <Link className='block m-0 w-fit mt-3' to={homeClient.button.link}>
              <button className='btn px-3 w-fit py-2 rounded-md'>
                {homeClient.button.title}
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-5">

          <div>
            <homeClient.quote.Icon color={'gray'} size={'2em'} />
            <p className='opacity-80 max-w-72 my-4'>{homeClient.quote.line}</p>
          </div>

          <div className='flex flex-wrap items-center justify-between flex-1 gap-4'>

            {homeClient.cards && homeClient.cards.map((v, i) => <Link key={i} to={v.link}>
                <figure className='md:w-[28rem] h-fit'>
                  <img className='object-cover w-full h-full ' src={v.img} alt="" />
                  <figcaption className='w-full h-20 text-xl mt-2'>{v.title}</figcaption>
                </figure>
              </Link>)}

          </div>

        </div>
      </div>
    </section>
  )
}

export default HomeClient

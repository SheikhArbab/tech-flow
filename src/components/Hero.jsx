import React from 'react';
import { heroImage } from '@/assets/index'
import { Link } from 'react-router-dom';

const Hero = ({ heroVid, heroPoster, image, heroHeading, heroLine, btnTitle, btnLink }) => (


  <div className='relative' >
    <section className="md:aspect-video overflow-hidden relative h-screen w-full z-10  ">
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-black" />
      {heroVid || heroPoster ? <><video
        className="object-cover w-full h-full relative"
        autoPlay={true}
        playsInline={true}
        loop={true}
        muted={true}
        poster={heroPoster}
      >
        <source
          src={heroVid}
          type="video/mp4"
        />
      </video>
        <span className='bg-gradient-to-l from-secondary/50 to-primary/40 absolute top-0 left-0 w-full h-full z-50'></span></>:

        <><img
          src={image ? image : heroImage}
          className="object-cover w-full h-full " />
          <span
            className='bg-gradient-to-l from-secondary/50 to-primary/50 absolute top-0 left-0 w-full h-full'>
          </span></>
      }
    </section>
    <div className="absolute top-[54%] left-1/2 z-10 text-white text-center w-[90%] -translate-x-[50%] -translate-y-[50%]">
      <h1 className='text-[10dvw] sm:text-[6dvw]'>{heroHeading}</h1>
      <p className='text-xs md:text-2xl my-5'>{heroLine}</p>
      {btnTitle && <Link to={btnLink}><button className='btn px-3 w-fit py-2 rounded-md'>{btnTitle}</button></Link>}
    </div>
  </div>

);

export default Hero;

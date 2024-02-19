import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Hero, FooterTopBnr } from '@/components/index'
import { teamSlider } from '@/assets/index'

const OurTeam = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Hero heroHeading={'Our Team'} btnTitle={'Get In Touch'} btnLink={'/contact'}
        heroLine={'The right thinkers, makers and doers to meet your goals. All on one team'}
      />
      <div className="container mx-auto sm:px-0 px-8">
        <p className='md:w-[80%] pt-12 mx-auto md:text-3xl md:leading-relaxed opacity-70'>Industry specialists. Inventors. Engineers. Technologists. Advisors. Experts. Parents. Philanthropists. <br />
          <br />
          Tech Flow LLc team brings diverse experience and tools to bring your possible into the present. From designing and building a new product or experience to navigating a major company transformation, we’re with you from idea to implementation and from vision to value.</p>
        <h1 className='text-3xl text-secondary py-8'>Hear from our people</h1>
      </div>
      <Carousel className='-mb-6' infiniteLoop={true} autoPlay={true}
        interval={2000}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        responsive={responsive}>
        {teamSlider.map((v, i) => <figure key={i}><img className='opacity-80 hover:opacity-100 duration-300 transition-all' src={v} /></figure>)}
      </Carousel>;

      <FooterTopBnr heading={`Want to learn more?`} btnTitle={'Contact Us'} btnLink={'/contact'} />
    </>
  )
}

export default OurTeam

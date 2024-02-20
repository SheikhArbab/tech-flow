import React from 'react'
import { Hero, FooterTopBnr,Card } from '@/components/index'
import { officesData } from '@/constants/index' 

const Offices = () => <><Hero heroHeading={'Our Offices'} heroLine={'Emerald City. Second City. The Big Apple. Find your nearest Tech Flow LLc team, coast to coast.'}/><section className='flex flex-wrap items-center gap-8 py-20 container mx-auto px-8 sm:px-0 '><p className='opacity-70 text-3xl leading-relaxed'>Tech Flow LLc multidisciplinary teams work collaboratively across the firm to serve you in your local market. All locations embody our award-winning culture – but each office reflects something distinct to its region as well. That’s because we’re committed to the needs of our local employees, clients, and communities. Explore our locations below.</p>
                <div className='flex flex-wrap items-center justify-center gap-8'>
                    {officesData.map(v => <Card  key={v.link} img={v.img} link={v.link} title={v.title} description={v.description}/> )}</div>
            </section>
            <FooterTopBnr heading={`We're helping clients achieve their boldest ambitions. Read more about how our clients are redefining their businesses to thrive.`} btnTitle={'See All Client Stories'} btnLink={'/client-stories'} /></> 

export default Offices

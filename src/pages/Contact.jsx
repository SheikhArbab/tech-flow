import React from 'react'
import { Hero, ContactForm, ContactInfo, FooterTopBnr } from '@/components/index'

const Contact = () => {
    return (
        <>
            <Hero
                heroHeading={'Contact Us'}
                heroLine={'Looking for digital consulting that will drive results, or just curious about what we do? You’re in the right place. Email. Phone. Social media. Connect with the right people.'}
            />
            <section className='flex flex-wrap items-center gap-8 py-20 container mx-auto sm:px-0 px-4 overflow-x-hidden'>
                <div className='flex flex-col gap-20 w-fit'>
                    <h1 className='text-4xl'>How can we help?</h1>
                    <div className="login-box p-8 rounded-md md:w-[50em] w-full flex  flex-col gap-7 shadow-lg shadow-primary bg-secondary">
                        <ContactForm />
                    </div>
                </div>
                <ContactInfo />
            </section>
            <FooterTopBnr heading={`Get to know us`} btnTitle={'Meet Our Team'} btnLink={'/our-team'} />
        </>
    )
}

export default Contact

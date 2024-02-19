import React from 'react';
import { ContactForm } from '@/components/index'

const HomeContact = () => (
  <section className='w-full min-h-screen py-20 bg-secondary flex items-center justify-center'>
    <div className='container mx-auto flex flex-wrap items-center justify-between gap-8 h-full sm:p-0 px-4'>
      <div className='text-white w-[30em] '>
        <h1 className='text-2xl my-6'>GET IN TOUCH</h1>
        <p className='md:text-5xl'>Let's talk about the future.</p>
      </div>
      <div className="login-box p-8 rounded-md md:w-[40em] w-full flex  flex-col gap-7 shadow-lg shadow-primary">
        <ContactForm />
      </div>
    </div>
  </section>
);

export default HomeContact;

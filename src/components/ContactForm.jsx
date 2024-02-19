import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { homeFormValidation } from '@/constants/index'

const ContactForm = () => {

    const { handleChange, handleSubmit, handleBlur, touched, errors, values, } = useFormik(
        {
          initialValues: {
            fullName: "",
            email: "",
            phone: "",
            country: "",
            city: "",
            jobTitle: "",
            comment: "",
          },
          validationSchema: Yup.object(homeFormValidation),
          onSubmit: async (formValues) => {
            console.log(formValues);
          },
        });

  return (

    <form onSubmit={handleSubmit}>


      <div className='h-20'>
        <input
          className='text-white py-4 mb-8 bg-transparent outline-none w-full border-0 border-b-2 border-white rounded-md ps-2'
          placeholder='Full Name'
          type="text"
          id="fullName"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='false'
        />
        {touched.fullName && errors.fullName && (
          <div className="text-red-500 text-xs -mt-6">{errors.fullName}</div>
        )}
      </div>


      <div className='h-20'>
        <input
          className='text-white py-4 mb-8 bg-transparent outline-none w-full border-0 border-b-2 border-white rounded-md ps-2'
          placeholder='Email'
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='false'
        />
        {touched.email && errors.email && (
          <div className="text-red-500 text-xs -mt-6">{errors.email}</div>
        )}
      </div>


      <div className='h-20'>
        <input
          className='text-white py-4 mb-8 bg-transparent outline-none w-full border-0 border-b-2 border-white rounded-md ps-2'
          placeholder='Your Number'
          type="number"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='false'
        />
        {touched.phone && errors.phone && (
          <div className="text-red-500 text-xs -mt-6">{errors.phone}</div>
        )}
      </div>


      <div className='h-20'>
        <input
          className='text-white py-4 mb-8 bg-transparent outline-none w-full border-0 border-b-2 border-white rounded-md ps-2'
          placeholder='Country'
          type="text"
          id="country"
          name="country"
          value={values.country}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='false'
        />
        {touched.country && errors.country && (
          <div className="text-red-500 text-xs -mt-6">{errors.country}</div>
        )}
      </div>


      <div className='h-20'>
        <input
          className='text-white py-4 mb-8 bg-transparent outline-none w-full border-0 border-b-2 border-white rounded-md ps-2'
          placeholder='City'
          type="text"
          id="city"
          name="city"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='false'
        />
        {touched.city && errors.city && (
          <div className="text-red-500 text-xs -mt-6">{errors.city}</div>
        )}
      </div>


      <div className='h-20'>
        <input
          className='text-white py-4 mb-8 bg-transparent outline-none w-full border-0 border-b-2 border-white rounded-md ps-2'
          placeholder='Job Title'
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={values.jobTitle}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='false'
        />
        {touched.jobTitle && errors.jobTitle && (
          <div className="text-red-500 text-xs -mt-6">{errors.jobTitle}</div>
        )}
      </div>


      <div className='h-20'>
        <textarea
          className='text-white resize-none py-4 mb-8 bg-transparent outline-none w-full border-0 border-b-2 border-white rounded-md ps-2'
          placeholder='Your Message'
          type="text"
          id="comment"
          name="comment"
          value={values.comment}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='false'
          cols="30" >


        </textarea>

        {touched.comment && errors.comment && (
          <div className="text-red-500 text-xs -mt-6">{errors.comment}</div>
        )}
      </div>


      <div className='w-full flex items-center justify-center mt-10'>
        <button className='btn px-3 w-full py-2 rounded-md' type="submit">Submit</button>
      </div>
    </form>

  )
}

export default ContactForm

import React from 'react'
import { RootLayout } from '@/layout/index'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, Contact, Offices, OurTeam, About, TermsOfUse, PrivacyPolicy,Services,Industries,ClientStories,Perspectives,Careers } from '@/pages/index'

const Routing = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/offices' element={<Offices />} />
                <Route path='/our-team' element={<OurTeam />} />
                <Route path='/about' element={<About />} />
                <Route path='/terms-of-use' element={<TermsOfUse />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/services' element={<Services />} />
                <Route path='/industries' element={<Industries />} />
                <Route path='/client-stories' element={<ClientStories />} />
                <Route path='/perspectives' element={<Perspectives />} />
                <Route path='/careers' element={<Careers />} />
                <Route path='*' element={<Navigate to={'/'} />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />

}


export default Routing

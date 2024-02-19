import React from 'react'
import { RootLayout } from '@/layout/index'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, Contact, Offices, OurTeam } from '@/pages/index'

const Routing = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/offices' element={<Offices />} />
                <Route path='/our-team' element={<OurTeam />} />
                <Route path='*' element={<Navigate to={'/'} />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />

}


export default Routing
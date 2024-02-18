import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout1 = () => {
    return (
        <div className=' bg-red-100'>
            <Header/>
            <div><Outlet /></div>
        </div>
    )
}

export default Layout1

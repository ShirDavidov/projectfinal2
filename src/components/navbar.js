// developers:
// Mor Yossef 209514264
// Shir Davidov 318852159
// Rinat Polonski 313530842

import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import Header from './header'
import Sidebar from './sidebar'
import './navbar.css'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => setSidebar(sidebar => !sidebar)

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Header toggleSidebar={toggleSidebar} />
                <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
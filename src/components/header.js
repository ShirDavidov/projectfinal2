// developers:
// Mor Yossef 209514264
// Shir Davidov 318852159
// Rinat Polonski 313530842

import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header({ toggleSidebar }) {
    return (
        <div className='navbar'>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={toggleSidebar} />
            </Link>
            <div className='logo'>
                Costs Manager Client
            </div>
        </div>
    )
}

export default Header;
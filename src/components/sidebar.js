// developers:
// Mor Yossef 209514264
// Shir Davidov 318852159
// Rinat Polonski 313530842

import SidebarClose from './sidebarclose'
import SidebarItems from './sidebaritems'

function Sidebar({ sidebar, toggleSidebar }) {
    return (
        <nav className={`nav-menu ${ sidebar && `active` }`}>
            <ul className='nav-menu-items'>
                <SidebarClose toggleSidebar={toggleSidebar} />
                <SidebarItems toggleSidebar={toggleSidebar} />
            </ul>
        </nav>
    )
}

export default Sidebar;
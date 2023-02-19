// developers:
// Mor Yossef 209514264
// Shir Davidov 318852159
// Rinat Polonski 313530842

import { Link } from 'react-router-dom'

function SidebarItem({ item, index, toggleSidebar }) {
    return (
        <li key={index} className='nav-text'>
            <Link to={item.path} onClick={toggleSidebar}>
                {item.icon}
                <span>
          {item.title}
        </span>
            </Link>
        </li>
    )
}

export default SidebarItem;
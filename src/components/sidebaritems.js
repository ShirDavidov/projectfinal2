// developers:
// Mor Yossef 209514264
// Shir Davidov 318852159
// Rinat Polonski 313530842

import { SidebarData } from './sidebardata'
import SidebarItem from './sidebaritem'

function SidebarItems({ toggleSidebar }) {
    return (
        <>
            {
                SidebarData.map((item, index) => {
                    return (
                        <SidebarItem
                            item={item}
                            index={index}
                            toggleSidebar={toggleSidebar}
                        />
                    )
                })
            }
        </>
    )
}

export default SidebarItems;
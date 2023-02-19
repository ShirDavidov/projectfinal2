// developers:
// Mor Yossef 209514264
// Shir Davidov 318852159
// Rinat Polonski 313530842

import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />
    },
    {
        title: 'Add Expense',
        path: '/ExpenseAdder',
        icon: <IoIcons.IoIosAddCircle />
    },
    {
        title: 'History',
        path: '/HistoryTables',
        icon: <FaIcons.FaHistory />
    }
]
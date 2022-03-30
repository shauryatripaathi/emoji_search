import './NavBar.css'
import { useState } from 'react'
import NavBarIcons from './NavBarIcons'

export default function NavBar() {
    return <>
        <nav className='navbar'>
            <NavBarIcons/>
        </nav>
    </>
}
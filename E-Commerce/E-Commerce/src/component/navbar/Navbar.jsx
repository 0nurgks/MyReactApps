import React from 'react'
import NavbarLeft from './navbaritem/NavbarLeft'
import NavbarRight from './navbaritem/NavbarRight'

export default function Navbar() {
  return (<div className="flex items-center justify-between">  
    <NavbarLeft/>
    <NavbarRight/>
          </div>
  )
}

import React from 'react'
import NavbarLeft from './navbaritem/NavbarLeft'
import NavbarRight from './navbaritem/NavbarRight'
import "../../css/Navbar.css"

export default function Navbar() {
  return (
 <div>
      <div className="container mx-auto flex items-center  justify-between p-4">
        <NavbarLeft />
        <NavbarRight />
      </div>
    </div>
  )
}

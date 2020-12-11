import React, { useState } from 'react'
import { Navbar as RSNavbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap'

const Navbar = () =>{ 
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <RSNavbar 
      color='info'
      expand='md'
      dark
      data-testid='navbar'
    >

      <NavbarBrand 
        className='font-weight-bold' 
        href='/'
      >
        University List App
      </NavbarBrand>

      <NavbarToggler onClick={ toggle } />

      <Collapse isOpen={ isOpen } navbar>
        <Nav 
          className='mt-2'
          navbar
        >
          <NavItem>
            <NavLink
              className='font-weight-bold'
              href='/country'
            >
              List by Country
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink 
              className='font-weight-bold'
              href='/name'
            >
              List by Name
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink 
              className='font-weight-bold'
              href='/detail'
            >
              University Detail
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>

    </RSNavbar>
  )
}

export default Navbar
import React from 'react'
import styled from 'styled-components'
import Nav from 'react-ui/styled/Nav'

export default function Navbar({ routes, ...rest }) {
	return (
      <Nav {...rest}>
         {routes.map(
            route => <Nav.Item href={route.href}>{route.label}</Nav.Item>
         )}
      </Nav>
   ) 
}
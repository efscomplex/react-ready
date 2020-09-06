import React from 'react'
import { NavLink } from 'react-router-dom'

export default function RouterLink(
   { as = "li", activeClassName="active", to, href, ...props }
){
   
   const children
      = <NavLink to={to || href} activeClassName={activeClassName} {...props}/>

   return React.createElement(as, props , children)
}
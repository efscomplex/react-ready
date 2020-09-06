import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import merge from 'react-ui/resources/merge'

export default function NextLink(
   {href= '/', activeClassName='active', label, children, ...rest}
) {
   const router = useRouter()
   const isActive = router.pathname == href
   const props = isActive
      ? merge(rest, {className: activeClassName})
      : rest
      
   return ( 
      <Link href={href}>
         <Anchor {...props}>
            {children || label}
         </Anchor>
      </Link>
   )
}
const Anchor = styled.a`
   cursor: pointer;
   pointer-events: ${ props => 'disabled' in props ? 'none' : null};
`
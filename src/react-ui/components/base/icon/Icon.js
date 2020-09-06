import React, {memo} from 'react'
import styled from 'styled-components'
import CustomLink from 'react-ui/components/base/links/Link'
import { cssMargins } from 'react-ui/styled/mixins'

function Icon(
   { href, to, src, svg: Svg, Link=CustomLink, ...rest}
){ 
   const jsxElement = Svg 
      ? <Svg {...rest}/>
      : <img  alt="icon" src={src} {...rest}/>

   return href || to 
      ? <Link href={href || to}> {jsxElement}</Link> 
      : jsxElement
}

export default memo(
   styled(Icon)`
      ${cssMargins}
      ${props => props.onClick ? 'cursor: pointer;' : null}
   `
)

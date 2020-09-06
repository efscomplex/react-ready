import React from "react";
import getIcons from '../../../components/base/SignService/login/node_modules/react-ui/resources/react-icons'
import styled from 'styled-components'
import Icon from 'react-ui/components/base/icon'
import Link from 'react-ui/components/base/links/Link'
import { capitalize } from 'react-ui/resources/utilities'

const Wrap = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: center;
   & > * { margin-right: .4rem;}
`

function Socialbar({icons, size='28', ...rest }){   
   const Icons = getIcons(icons.map(item=>item.name)) 
   
   const iconToJsxElement = (icon) => {
      let Svg = Icons[capitalize(icon.name)]
      return <Icon key={icon.name} href={icon.href} svg={Svg} size={size} {...rest}/>
   }

   return (
      <Wrap>{
         icons.map(iconToJsxElement)
      }</Wrap>
   )
}

export default Socialbar
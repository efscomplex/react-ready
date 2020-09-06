import React from 'react'
import useToggle from 'react-ui/hooks/useToggle'
import useSlots from 'react-ui/hooks/useSlots'
import styled, {keyframes, css} from 'styled-components'
import MenuIcon from './Menu'

const Menu = styled(MenuIcon) `
   @media (min-width: ${props=> props.breakpoint}px) {
      display: none;
   }
`
const NavWrap = styled('div') `
   @media (max-width: ${props => props.breakpoint}px){
      display: none;
   }
`
export default function Navbar({ children, breakpoint=927, ...props }) {
	const { 
      state: showNav, 
      handle: toggleMenu 
   } = useToggle(true)

   const {
      Slot,
      childs 
   } = useSlots(children)

	return (
      <div {...props}>
         <Menu onClick={toggleMenu} breakpoint={breakpoint}/>
         {showNav && <Slot name='vertical'/>}
         <NavWrap breakpoint={breakpoint}>{childs}</NavWrap>
      </div>
   )  
}


const fadeIn = keyframes `
   from { opacity: 0; max-height: 0;}
   to { opacity: 1; max-height: 100%; display: initial;} 
`
const fadeOut = keyframes `
   from { opacity: 1; max-height: 100% }
   to { opacity: 0; max-height: 0; display: none;}
`
const cssAnimation = css `
   animation-name: ${props => props.show ? fadeIn : fadeOut};
   animation-duration: 3s;
   animation-delay: 0s;
   animation-fill-mode: forwards;
   animation-timing-function: linear;
   @media (min-width: ${props => props.breakpoint}px){
      animation-name: ${fadeIn};
   }
`
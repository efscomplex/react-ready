import React from 'react'
import styled from 'styled-components'
import getIcons from 'ui/resources/react-icons'

const Icon = getIcons(['Close'])

function Modal({show, close, children, persistent, ...props}){
   
   return show && (
      <StyledModal onClick={close} {...props}>
         <Wrap>
            {persistent && <CloseBtn size='40' onClick={closeModal}/>}
            {children}
         </Wrap>
      </StyledModal>
   )
}

const Wrap = styled('div')`
   position: relative;
   padding: 2rem;
   background-color: white;
`
const CloseBtn = styled(Icon.Close)`
   position: absolute;
   right: -2rem;
   top: -2rem;
   width: 2rem;
`
const StyledModal = styled('div')`
   position: absolute;
   width: 100vw;
   height: 100vh;
   padding-top: 22vh;
   top: 0;
   left: 0;
   display: flex;
   justify-content: center;
   & > * {
      position: relative;
      width: fit-content;
      height: fit-content;
   }
   z-index: 100000;
   background-color: rgba(0,0,0,.45);
`
export default styled(Modal)``
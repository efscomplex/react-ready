import React from 'react'
import styled from 'styled-components'

function Spinner(props) {
	return (
      <Wrap {...props}>
         <div className='spinner-border text-primary' role='status'>
            <span className='sr-only'>Loading...</span>
         </div>
      </Wrap>
	)
}

Spinner.Modal = styled(Spinner)`
   position: absolute;
   top:0;
   left:0;
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   background-color:rgba(0,0,0,.6);
   padding-top: 10vh;
   z-index: 100;
`

const Wrap = styled('div')` 
   display: flex;
   justify-content: center;
   align-items: center;
`

export default Spinner
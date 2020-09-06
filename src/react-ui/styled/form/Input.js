import styled, { css } from 'styled-components'
import getPattern from './validation'

const Input = styled('input').attrs(
   props =>({
      placeholder: props.placeholder || 'type text...',
      type: props.type || 'text',
      pattern: getPattern(props)
   })
)`
   width: 15ch;
   border-radius: 6px;
   background-color: transparent;
   border: none;
   color: inherit;
   font-weight: 300;
   :focus{ outline: none;}
   ::placeholder{ opacity: .8; }
   :invalid {
      outline: 2px slid var(--error, red);
      border: color: red;
   }
   
`

export default Input
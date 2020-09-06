import styled, { css } from 'styled-components/macro'
import * as get from './mixins'

const cssFlexbox = css `
   display: ${props => 'inline' in props ? 'inline-flex' :  'flex'};
   flex-direction: ${get.flexDirection};
   flex-wrap: ${get.flexWrap};
   justify-content: ${get.justifyContent}; 
   align-items:${get.alignItems}; 
   gap: ${ props => props.gap };
`
const Flexbox = styled('div')`
   ${cssFlexbox}
`

export default Flexbox


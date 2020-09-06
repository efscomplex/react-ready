import styled from 'styled-components'

export default styled.div`
   display: ${props => props.block ? 'flex' : 'inline-flex'};
   align-items: ${props => props.align || 'flex-end'};
   align-items: ${props => props.end && 'flex-end'};
   align-items: ${props => props.start && 'flex-start'};
   align-items: ${props => props.center && 'center'};
   flex-wrap: ${ props => props.wrap ? 'wrap': 'nowrap'};
   justify-content: ${ props => props.justify};
   gap: ${props => props.gap || '0'}; 
`

import styled from 'styled-components'

const Background = styled('div')`
   width: ${props => props.width || '100%'};
   height: ${ props => props.height};
   background-position: ${props => props.position || 'center'};
   background-size: ${ props => props.size || 'cover'};
   background: ${props => props.background};
   background-image: ${props => props.image};
`

export default Background
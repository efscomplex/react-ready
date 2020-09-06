import styled, { css } from 'styled-components'

export const cssAlignSelf = css `
   align-self: ${ props => props.alignSelf};
   align-self: ${ props => props.align};
   align-self: ${ props => props.flexEnd};
   align-self: ${ props => props.stretch};
   align-self: ${ props => props.baseline};
`
const GridItem = styled('div')`
   ${cssAlignSelf}
`

export default GridItem
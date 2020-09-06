import styled, {css} from 'styled-components'

const cssGrid = css `
   display: ${props => props.inline ? 'inline-grid' : 'grid'};
   grid-template-columns: ${ props => props.cols };
   grid-template-rows: ${ props => props.rows };
   grid-gap: ${ props => props.gap };
   grid-template-areas: ${ props => props.areas};
   justify-items: ${ props => props.justify};
   align-content: ${ props => props.align};
`
const Grid = styled('div')`
  ${cssGrid}
`

export default Grid

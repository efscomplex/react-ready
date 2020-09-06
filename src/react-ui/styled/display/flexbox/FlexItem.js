import styled from 'styled-components'
import { cssAlignSelf, cssFlexBasis, cssJustifySelf } from './mixins'

const FlexItem = styled.div`
   ${cssAlignSelf}
   ${cssFlexBasis}
   ${cssJustifySelf}
`
export default FlexItem
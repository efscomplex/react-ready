import styled from 'styled-components'
import Inline from '../inline'
import Flexbox from '../flexbox'
import Grid from '../grid'

const dispOpts = ['flex', 'block', 'grid']

const Block = styled('div')``

Block.Inline = Inline
Block.Flexbox = Flexbox
Block.Flex = Flexbox
Block.Grid = Grid

const Wrap = Block
const Flex = Flexbox

export default Block
export {
   Wrap,
   Block,
   Inline,
   Flexbox,
   Flex,
   Grid,
}
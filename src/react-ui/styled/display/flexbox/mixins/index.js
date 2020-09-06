import { css } from 'styled-components'

export const flexDirection = props => {
   if ('direction' in props) return props.direction
   if (('column' in props) || 'col' in props) {
      if ('reverse' in props)
      return 'column-reverse'
      return 'column'
   }else if ('reverse' in props) {
      return 'row-reverse'
   }
}
export const flexWrap =  props => {
   if('wrap' in props) return 'wrap'
   if('nowrap' in props) return 'nowrap'
   if('wrapReverse' in props) return 'wrap-reverse'
   if ('flexWrap' in props) return props.flexWrap
   return 'wrap'
}
export const justifyContent =  props => {
   if('between' in props) return 'space-between'
   if('centerX' in props) return 'center'
   if('center' in props) return 'center'
   if('evenly' in props) return 'space-evenly'
   if('endX' in props) return 'flex-end'
   if('startX' in props) return 'flex-start'
   if('justify' in props) return props.justify
}
export const alignItems =  props => {
   if('startY' in props) return 'flex-start'
   if('centerY' in props) return 'center'
   if('endY' in props) return 'flex-end'
   if('baseline' in props) return 'baseline'
   if('align' in props) return props.align
}
export const cssAlignSelf = css `
   align-self: ${ props => props.align};
   align-self: ${ props => props.alignStart};
   align-self: ${ props => props.alignEnd};
   align-self: ${ props => props.stretch};
   align-self: ${ props => props.baseline};
`
export const cssJustifySelf = css `
   justify-self: ${ props => props.justify};
   justify-self: ${ props => props.flexStart && 'flex-start'};
   justify-self: ${ props => props.left && 'left'};
   justify-self: ${ props => props.flexEnd && 'flex-end'};
   justify-self: ${ props => props.right && 'right'};
   justify-self: ${ props => props.center && 'center'};
   justify-self: ${ props => props.stretch && 'stretch'};
`
export const cssFlexBasis = css `
   flex-basis: ${ props => props.basis};
   width: ${ props => props.width};
`
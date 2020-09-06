import styled, {css} from 'styled-components'
import Text from 'ui/styled/tipography/Text'
import Img from 'react-ui/styled/images/Img'
import Grid from 'react-ui/components/layout/grid'
import Btn from 'react-ui/styled/Btn'
import Title from 'ui/styled/tipography/Title'

import {
   cssColorTheme,
   cssText,
   cssMargins,
   cssPaddings,
   cssTextAlign,
} from 'react-ui/styled/mixins'

export const Header = styled.header`
   padding-bottom: 1.4rem;
   ${cssPaddings}
   ${cssTextAlign}
   ${cssText}
`
export const Body = styled.div`
   font-size: 1em;
   padding-bottom: 1.4rem;
   ${cssPaddings}
   ${cssTextAlign}
   ${cssText}
`
export const Footer = styled.footer`
   font-size: 1em;
   padding-bottom: 1.4rem;
   ${cssPaddings}
   ${cssTextAlign}
   ${cssText}
`

const cssCardAlign = css `
   text-align: ${ props => props.textAlign};
   text-align: ${ props => 'centerText' in props ? 'center' : null };
   text-align: ${ props => 'leftText' in props ? 'left' : null };
   text-align: ${ props => 'rightText' in props ? 'right' : null };
   text-align: ${ props => 'justifyText' in props ? 'justify' : null };
`

const Card = styled(Grid) `
   width: ${(props) => ('width' in props ? props.width : null)};
   
   border-radius: ${(props) => (props.br ? props.br : '5px')};
   
   margin-left: ${ props => props.center && 'auto'};
   margin-right: ${ props => props.center && 'auto'};

   ${cssText}
   ${cssCardAlign}
   ${cssColorTheme}
   ${cssMargins}
   ${cssPaddings}
`

Card.Title = Title
Card.Body = Body
Card.Header = Header
Card.Footer = Footer
Card.Text = Text
Card.Img = Img
Card.Btn = Btn

export { Text }
export { Title }
export { Btn }
export { Img }
export { Card }
export default Card

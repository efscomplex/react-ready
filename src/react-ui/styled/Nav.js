import styled, { css } from 'styled-components'


const config = {
   padding: '.2rem .6rem',
}
const cssNavStyles = css `
   display: ${props => props.inlint ? 'inline-flex' : 'flex'};
   align-items: center;
   gap: ${ props => props.gap };
`
const cssLiStyles = css `
   margin-right: .6rem;
   margin-left: .3rem;
   border-radius: 6px;
   transition: ${ props => props.transition || 
      'background-color linear .2s, color linear .2s, opacity linear .2s'
   };
`
const cssLinkStyles = css `
   padding: ${config.padding};
   text-transform: capitalize;
   display: inline-block;
   &:hover { 
      opacity: .8;
   }
`
const Nav = styled.nav `
   ${cssNavStyles}
   li { 
      ${cssLiStyles} 
   }
   a { 
      ${cssLinkStyles} 
   }
`
const ListItem = styled.li`
  ${cssLiStyles}
`  
const Link = styled.a `
   ${cssLinkStyles}
`
const Label = styled.span `
   display: inline-block;
   padding: ${config.padding};
`

const NavItem = ({children, props, ...rest}) => {
   return (
      <ListItem {...props}>
         <Link {...rest}>
            {children}
         </Link>
      </ListItem> 
   )
}

Nav.Item = NavItem
Nav.Link = Link
Nav.Label = Label

export default Nav
import styled, { css } from 'styled-components'
import { cssPaddings } from 'react-ui/styled/mixins'

const cssColorContextTheme = css `
   color: ${ props => props.theme.fg ? props.theme.fg : null };
   background-color: ${ props => props.theme.bg ? props.theme.bg : null };
   border: ${ props => props.theme.fg ? ('1px solid '+ props.theme.fg) : null };
`
const cssBootstrappedTheme = css `
   background-color: ${ props => 'primary' in props ? 'var(--primary)' : null};
   background-color: ${ props => 'secondary' in props ? 'var(--secondary)' : null};
   background-color: ${ props => 'warning' in props ? 'var(--warning)' : null};
   background-color: ${ props => 'info' in props ? 'var(--info)' : null};
   background-color: ${ props => 'danger' in props ? 'var(--danger)' : null};
   background-color: ${ props => 'success' in props ? 'var(--success)' : null};
`

export const cssColorTheme = css `
   color: ${props => props.fg};
   ${ props => 'mute' in props 
      ? 'color: var(--text-mute, gray)' 
      : 'color' in props ? `color: ${props.color}` : null
   };
   border: ${ props => props.fg ? `1px solid ${props.fg}` : null};
   ${ props => 'border' in props ? `border: 1px solid ${props.border}` : null };
   background-color: ${ props => 'bg' in props ? props.bg : null };
   /*${ props => 'bg' in props ? `background-color: ${props.bg}` : null };*/
`
const cssFlatBtn = css `
   border: ${props => props.flat && 'none'};
   background-color: ${props => props.flat && 'transparent'};
`
const cssBtn = css `
   min-width: fit-content;
   width: fit-content;
   height: fit-content;
   width: ${ props => 'fluid' in props ? '100%' : null};
   width: ${ props => 'expand' in props ? '100%' : null};

   margin: ${ props => 'center' in props ? 'auto' : null};
   padding: .6rem 1.4rem;
   
   font-size: 1rem;
   line-height: 1rem;
   
   transition: color .4s ease, background-color .4s ease;
   border-radius: ${props => props.radius || '4px'};
   border: none;

   cursor: pointer;
   pointer-events: ${ props => 'disabled' in props ? 'none' : null};
   
   white-space: ${props => props.break ? 'normal' : 'nowrap'}; 

   &:focus {
      outline: none; }
   &:active {
      border: none; }

   ${ cssPaddings }
   ${ cssColorContextTheme}
   ${ cssColorTheme }
   ${ cssBootstrappedTheme }
   ${ cssFlatBtn }
`
export default styled.button.attrs(
   props => ({children: props.children || props.label})
)`
  ${cssBtn}
`

export {cssBtn}
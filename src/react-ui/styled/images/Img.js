import styled, { css } from 'styled-components'

const cssImg = css `
   display: block;
   margin: ${props => 'center' in props ? 'auto' : null};
   max-width: 100%; 
   width: ${ props => props.width || props.size || null};
   height: ${
      props => props.size && `calc(${props.size} * ${props.ratio})`
   };
   height: ${ props => props.height};
   object-position: ${(props) =>
      'position' in props ? props.position : 'center'};
   object-fit: ${ props => props.fit || 'cover'};
`

export default styled.img.attrs((props) => ({
   ratio: props.ratio || 9 / 16,
}))`
   ${cssImg}
`
export { cssImg }
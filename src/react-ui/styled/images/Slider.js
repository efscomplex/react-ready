import React, {useState} from 'react'
import styled, {css} from 'styled-components/macro'
import getIcon from 'ui/resources/react-icons'
import Img from './Img'

const LeftControl = getIcon('outlineLeft')
const RightControl = getIcon('outlineRight')
const count = React.Children.count

const Controls = styled('div')`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1.7rem;
   & > * { cursor: pointer;}
`

const Wrap = styled('div')`
   position: relative;
   height: ${ props => props.height};
`

const Slider = ({children, slider, controls, ...props}) => {
   const [ current, setCurrent ] = useState(0)
   const nOfChilds = count(children)
   const module = n => (Math.abs(n) % nOfChilds)

   const handleClick = to => () => {
      current === 0 && to < 0
         ? setCurrent(nOfChilds-1)
         : setCurrent(module(current + to))}
   
   const cssCurrentSlide = css `
      & > * { transition: order ease 1s;}
      & > :nth-child(${current+1}){
         order: -1;
         animation: ${props => props.animation } forwards;
      }
   `
   return (
      <Wrap {...props}>
         <SliderWrap css={cssCurrentSlide} {...slider}>
            {children}
         </SliderWrap>
         <Controls>
            <LeftControl {...controls} onClick={handleClick(-1)}/>
            <RightControl {...controls} onClick={handleClick(1)}/>
         </Controls>
      </Wrap>
   )
   
}

const SliderWrap = styled('div')`
   width: 100%;
   height: 100%;
   display: ${ props => props.inline ? 'inline-grid' : 'grid'};
	grid-template-columns: ${props => `repeat(${count(props.children)}, 100%)`};
   overflow: hidden;
   & > * {
      width: 100%;
      /*height: 100%;*/
   }
`
Slider.Img = Img

export default Slider
import React, { useState } from 'react'

export default function withActiveClass(Comp){
   const Wrap = props => {
      if (!props.children) return Comp

      const [
         activeItem,
         setActiveItem ] = useState(0)
      const handleClick = e => {
         console.log(e.target)
         props.onClick && props.onClick(e)
      }
      
      return <Comp {...props}/>
   }

   return Wrap
}
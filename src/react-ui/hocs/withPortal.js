import React, {useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const defaultOpts = {
   portal:'root', 
   slot: 'prepend', 
   tag: 'div'
}

export default function withPortal(
   Comp, 
   { 
      portal = 'root', 
      slot = 'prepend', 
      tag = 'div' 
   } = defaultOpts
) {

	const WrapedComponent = ({ host = portal, ...props }) => {
		const [wrapper, setWrapper] = useState(null)

		useEffect(() => {
			let root =
				typeof host === 'string' ? document.getElementById(host) : host

			if (root) {
				const wrap = insertNewElement(root, tag, slot)
				setWrapper(wrap)
			}
		}, [host])

		return wrapper
			? ReactDOM.createPortal(<Comp {...props} />, wrapper)
			: null
	}

	return WrapedComponent
}

function insertNewElement(root, tag, slot ){
   const wrap 
      = document.createElement(tag)

   slot === 'prepend'
      ? root.prepend(wrap)
      : root.appendChild(wrap)
   
   return wrap
}
import React from 'react'

function withRouter(Comp, activeClassName = 'active') {
	return (props) => {
      const handleClick = (event) => {
         event.preventDefault()
         const currentActive = document.querySelector(`.${activeClassName}`)
         const targetActive = event.target

         if (targetActive != currentActive) {
            currentActive && currentActive.classList.remove(activeClassName)
            targetActive.classList.add(activeClassName)
            const path = targetActive.getAttribute('href')
            path && (window.location = path)
         }
      }
      
      let childs = React.Children.map( 
         props.children,
         child => ({
            ...child,
            props: {...child.props, onClick: handleClick}
         })
      )
		
		return React.createElement(Comp, props, childs)
	}
}

export default withRouter

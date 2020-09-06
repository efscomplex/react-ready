import React from 'react'

export default function Form({legend, actions, handle, children, ...props}) {
   
   return (
      <form onSubmit={onSubmit} onReset={onReset} {...props}>
        
      </form>
   )
}

import {useState, useCallback} from 'react'

function useToggle({initial=undefined, handle=null} = opts){
   const [
      state,
      setState
   ] = useState(initial)
   
   const $handle = useCallback((event) => {
		setState((state) => !state)
		if (handle) {
			event.preventDefault()
			handle(event)
		}
	},[setState])
   
   return {
      state,
      setState,
      handle: $handle
   }
}

const opts = {
   initial: undefined, 
   handle: null
}

export default useToggle
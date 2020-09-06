import React, {memo, useState, useEffect} from 'react'
import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators'

function FetchData({url, children, pipes$=[], render}){
   const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
   
   useEffect(() => {
      const obs$ = ajax(url).pipe(
			map((str) => str.response),
			...pipes$
		) 
      const subscriber = obs$.subscribe(stream => {
         setData(stream) //setData( data => [...data, ...stream])
         setLoading(false) 
      },setError) 

      return () => subscriber.unsubscribe()
   }, [url])

   if (!children && render) return render({ loading, data, error }) 

   return children?.({ loading, data, error }) || null
}

export default memo(FetchData)
import { useEffect} from 'react'
 
 export default function useInfinityScroll(targetId, callback){
   useEffect(
      () =>{
         const observer = new IntersectionObserver(callback, {
				rootMargin: '1000px 0% 0% 0%'
				//threshold: 1.0,
			})
         const target =document.getElementById(targetId)
         observer.observe(target)
      }, [targetId, callback]
   )
 }
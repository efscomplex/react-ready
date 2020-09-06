export default function withHandleClick(Comp, handle = null){
   if(!handle) return Comp

   return ({onClick, ...props}) => {
      return <Comp {...props} onClick={handle}/>
   }
}
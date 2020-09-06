import exp from './patterns'

const getPattern = props => {
   let type = props.type || 'text'
   switch(type){
      case 'text':
         return null
      case 'email':
         return exp.email
      case 'password':
         return exp.password

      default: 
         return null
   }
}

export default getPattern
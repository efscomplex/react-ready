import styled from 'styled-components'
import Label from './Label'
import Input from './Input'

const Form = styled('form')`

`
Form.Input = Input
Form.Label = styled(Label)`
   ${Form.Input}{
      width: 100%;
   }
`

export default Form

export {
   Form,
   Label,
   Input, 
}
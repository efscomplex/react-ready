import styled from 'styled-components'
import {
   cssMargins,
   cssPaddings,
   cssText,
   cssTextAlign,
   cssColorTheme,} from 'react-ui/styled/mixins'

const Text = styled.div`
   ${cssMargins}
   ${cssPaddings}
   ${cssText}
   ${cssTextAlign}
   ${cssColorTheme}
`
export { Text }
export default Text
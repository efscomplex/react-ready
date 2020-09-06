import styled, { ThemeContext } from 'styled-components'

export default function withThemeProvider(Comp, initial={}){
   return props => {
      return (
         <ThemeContext.Provider value={initial}>
            <Comp {...props}/>
         </ThemeContext.Provider>
      )
   }
}
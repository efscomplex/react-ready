import Icon from 'react-ui/components/base/icon'
import styled from 'styled-components'
import icons from './brands'
import { capitalize } from 'react-ui/resources/utilities'

export default function getIcons(name, brand) {
   if (!name) return icons

   if (brand && typeof name === 'string') {
      return icons[brand] && icons[brand][name]
   }

   let names = Array.isArray(name) ? name : [name]
   names = names.map( icon => capitalize(icon))
   const Icon = getIconsFromNames(names, icons)
   
   return typeof name === 'string' ? Icon[capitalize(name)] : Icon
}

function getIconsFromNames(names, icons) {
   let iconNames = Object.entries(icons)
   let aux = iconNames.flat().filter((item) => typeof item !== 'string')
   let matches = {}

   names.forEach((name) => {
      let icon = aux.find((brand) => brand[name])
      if (icon) {
         matches[name] = icon[name]
      } else {
         matches[name] = () => name
      }
   })
   return matches
}

function getArrayOfIcons(name, brand){
   const Icons = getIcons(name, brand)
   return Object.values(Icons)
}

export function getIconsFrom(name, brand){
   const svgIcon = getIcons(name, brand)
   
   if(!svgIcon) return svgIcon
   for (let iconName in svgIcon){
      svgIcon[iconName]= styled(Icon).attrs({
         svg: svgIcon[iconName]
      })``
   }
   return svgIcon
}
export { getArrayOfIcons }
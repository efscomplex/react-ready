import React from 'react'
import styled from 'styled-components'
import Flex from 'ui/styled/display/flexbox/'
import Banner from 'ui/components/base/banner'

export default function Header(
   {children, banner, ...rest}
){
   return (
      <Flex justify='space-between' align='center' {...rest}>
         { children }
         { banner &&
            <Banner src={banner} absolute={absolute}/>
         }
      </Flex>
   )
}
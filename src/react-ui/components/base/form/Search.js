import React from 'react'
import Input from 'ui/styled/form/Input'
import styled from 'styled-components'

export default function Search({ children, props, icon: Icon, ...rest }) {
	return (
		<Wrap {...rest}>
			<Input {...props} />
			{React.isValidElement(Icon) ? Icon : Icon && <Icon />}
			{children}
		</Wrap>
	)
}

const Wrap = styled('div')`
	display: flex;
   align-items: center;
   flex-wrap: nowrap;
	box-shadow: 0 1px rgba(0, 0, 0, 0.3);
`

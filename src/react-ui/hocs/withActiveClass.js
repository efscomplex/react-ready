import React from 'react'
import { useRouter } from 'next/router'
import merge from 'react-ui/resources/merge'

export default function withActiveState(Comp) {
	return ({ activeClassName = 'active', ...rest }) => {
		const router = useRouter()
		const isActive = router.pathname == rest.href
		const props = isActive
			? merge(rest, { className: activeClassName })
			: rest

		return <Comp {...props} />
	}
}

export const withActivation = (Comp) => {
	return ({activeClassName='active', ...props}) => {
		const router = useRouter()
		const isActive = router.pathname == props?.href

		return React.cloneElement(<Comp {...props} />, {
			className: isActive ? activeClassName : '',
		})
	}
}

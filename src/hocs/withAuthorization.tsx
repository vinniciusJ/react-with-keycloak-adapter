/* eslint-disable react/display-name */
import React, { FunctionComponent, useEffect } from 'react'

import useAuth from '../hooks/useAuth'
import type { IAuthorizationRoles } from '../interfaces/IAuthorizationRoles'

const withAuthentication =
	(roles: IAuthorizationRoles[]) =>
	<P extends object>(Component: FunctionComponent<P>): React.FC<P> => {
		return ({ ...props }) => {
			const { initialized, isAuthenticated, signin, hasRoles } = useAuth()

			useEffect(() => {
				if (!isAuthenticated) signin()
			}, [ isAuthenticated ])

			if (!initialized) {
				return <p>Loading...</p> // Aqui poderiamos returnar um componente mais complexo de loading
			}

			if(hasRoles(roles)){
				return <p>Vocẽ não tem autorização pra estar aqui!</p>
			}

			return <Component {...(props as P)} />
		}
	}

export default withAuthentication

import { useCallback, useMemo } from 'react'

import { useKeycloak } from '@react-keycloak/web'

import { IAuthorizationRoles } from '../interfaces/IAuthorizationRoles'

const useAuth = () => {
	const { initialized, keycloak } = useKeycloak()

	const isAuthenticated = useMemo(() => {
		const { authenticated, tokenParsed } = keycloak
		const isTokenExpired = tokenParsed?.exp ? tokenParsed?.exp < (new Date().getTime() + 1) / 1000 : false

		return authenticated && !isTokenExpired
	}, [keycloak])

	const signin = useCallback(() => keycloak.login(), [ keycloak ])

	const hasRoles = useCallback((roles: IAuthorizationRoles[]) => {
		if(keycloak && roles){
			return roles.some(role => {
				const hasRealmRoles = keycloak.hasRealmRole(role)
				const hasClientRoles = keycloak.hasResourceRole(role)

				return hasClientRoles || hasRealmRoles
			})
		}
		
		return false
	}, [keycloak])

	return {
		signin,
		hasRoles,
		initialized,
		isAuthenticated
	}
}

export default useAuth
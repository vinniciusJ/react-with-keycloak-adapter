import { useEffect, useMemo, useRef, useState } from 'react'

import { useKeycloak } from '@react-keycloak/web'

const useUser = () => {
	const { keycloak } = useKeycloak()

	const [ userInfo, setUserInfo ] = useState<any>(null)

	useEffect(() => {
		(async () => setUserInfo(await keycloak.loadUserInfo()))()
	}, [])
	
	return userInfo
}

export default useUser
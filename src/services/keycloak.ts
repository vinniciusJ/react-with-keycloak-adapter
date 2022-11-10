import Keycloak from 'keycloak-js'

// importando as variaveis do arquivo .env com import.meta.enb

const keycloak = new Keycloak({
	url: import.meta.env.VITE_KEYCLOAK_URL,
	realm: import.meta.env.VITE_KEYCLOAK_REALM,
	clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
})

export default keycloak

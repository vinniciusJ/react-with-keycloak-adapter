import React from 'react'

import { ReactKeycloakProvider as KeycloackProvider } from '@react-keycloak/web'
import ReactDOM from 'react-dom/client'

import App from './App'
import keycloak from './services/keycloak'

const container = document.querySelector('#root') as HTMLElement
const root = ReactDOM.createRoot(container)

root.render(
	<KeycloackProvider authClient={keycloak}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</KeycloackProvider>
)

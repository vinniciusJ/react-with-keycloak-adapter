import React, { Suspense, lazy } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/home')) //code-splitting

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route path="/">
						<Route index element={<HomePage />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}

export default AppRoutes

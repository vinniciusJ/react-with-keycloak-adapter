import React from 'react'

import withAuthentication from '../../hocs/withAuthorization'

const Home: React.FC = () => {
	return <div>AA</div>
}

export default withAuthentication(['admin', 'user'])(Home)

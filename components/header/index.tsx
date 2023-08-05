import { getServerSession } from 'next-auth'
import { UserAvatar } from './userAvatar'
import Image from 'next/image'

const Header = async () => {
	const session = await getServerSession()
	// console.log(session?.user)

	return (
		<>
			<div style={navbarStyle}>
				{session?.user 
				? <UserAvatar user={session.user} />
				: <button>Login</button>
				}
			</div>

		</>
	)
}
export default Header


const navbarStyle = {
	backgroundColor: 'orange',
	marginBottom: '8px',

	display: 'flex',
	justifyContent: 'flex-end'
}
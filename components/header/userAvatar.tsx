'use client'
import type { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import Image from 'next/image'

// type User = {
// 	name: string
// 	email: string
// 	image: string
// }

type Props = {
	user: User
}
export const UserAvatar = ({ user }: Props) => {

	const avatarClickHandler = () => {
		signOut({
			// redirect: false
			callbackUrl: 'http://localhost:3000/signup'
		})

	}

	return (
		<>
			<Image 
				src={user?.image || '/vercel.svg'}
				alt='User avtar'
				width={42}
				height={42}
				onClick={avatarClickHandler}
				style={{
					cursor: 'pointer'
				}}
			/>
		</>
	)
}

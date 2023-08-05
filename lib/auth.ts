import type { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider, { FacebookProfile } from 'next-auth/providers/facebook'

export const authOptions: AuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt'
	},
	pages: {
		signIn: '/login'
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
		}),
		FacebookProvider({
			profile: (profile: FacebookProfile) => {
				console.log(profile)
				return {
					...profile,
					id: profile.id.toString(), 		// if not string
					role: profile.role || 'user'
				}
			},
			clientId: process.env.FACEBOOK_CLIENT_ID as string,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
		}),
		Credentials({
			credentials: {},
			authorize: (credentials, req) => {
				// console.log(credentials)

				const user = {
					id: '1',
					// role: 'admin', 					// Why role throw error but credentials did not, 
					// ...credentials, 						// 	 if role not in return type then credentials also not available
				}

				// return null 															// => Failed with Default Error message
				// throw new Error('Something goes wrong') 	// => Fialed with custom Error message
				return user 																// => Success
			}
		}),
	],

	callbacks: {
		// signIn: ({ user }) => {
		// 	user.role = 'admin'

		// 	return user
		// },

		// 2: user allow property role, because /types/next-auth.d.ts added to it.
		jwt: ({ token, user }) => { 								

			if(user) {
				token.role = user.role	 								// step-1: Add new property (role) to user object
			}
			return token
		},

		// 3: session.user allow property role, because New Updated User has role property
		session: ({ session, token, user }) => {

			if( token && session.user ) {
				session.user.role = token.role 					// Step-2: Now update session.user from user.role
			}
			return session
		}


	}
}
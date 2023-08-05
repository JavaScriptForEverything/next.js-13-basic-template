// import { DefaultSession, DefaultUser } from 'next-auth'
// import { JWT, DefaultJWT } from 'next-auth/jwt'

// enum Role {
// 	user = 'user',
// 	admin = 'admin'
// } 

// declare module 'next-auth' {

// 	interface Session {

// 		user: DefaultUser & {
// 			id: string,
// 			role: Role
// 			// role: 'user' | 'admin'
// 		}

// 	} 


// 	interface User extends DefaultUser {
// 		role: Role
// 		// role: 'user' | 'admin'
// 	}

// }


// declare module 'next-auth/jwt' {
// 	interface JWT extends DefaultJWT {
// 		role: Role
// 		// role: 'user' | 'admin'

// 	}
// }



// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
export enum Role {
  user = "user",
  admin = "admin",
}
interface IUser extends DefaultUser {
  /**
   * Role of user
   */
  role?: Role;
  /**
   * Field to check whether a user has a subscription
   */
  subscribed?: boolean;
}
declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}

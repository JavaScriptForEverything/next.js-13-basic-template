import { NextResponse } from 'next/server'

export type User = {
	id: string
	name: string
	email: string
	image: string
}
export type Body = {
	status: 'success' | 'failed'
	user: User
}
type Context = {
	params: {
		userId: string
	}
}


export const GET = async (req: Request, { params }: Context ): Promise<NextResponse<Body>> => {
	console.log({ userId: params.userId })

	return NextResponse.json({
		status: 'success',
		user: {
			id: '1',
			name: 'riajul',
			email: 'abc@gmail.com',
			image: '/avatar.png'
		}
	})
}
export const PATCH = async (req: Request, { params }: Context): Promise<NextResponse<Body>> => {
	const body = await req.json()

	// console.log({ userId: params.userId, body })

	return NextResponse.json({
		status: 'success',
		user: {
			id: params.userId,
			...body
		}
	})
}

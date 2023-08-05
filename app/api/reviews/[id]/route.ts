import { NextResponse } from 'next/server'


export const GET = async (req: Request, { params }: { params: { id: string }}) => {
	try {
	// throw new Error('something goes wrong')

	return NextResponse.json({
		status: 'success',
		data: {
			id: params.id,
			review: 'Awesome reviews',
			data: new Date()
		}
	})	

	} catch (err: any) {
		return NextResponse.json(null, { status: 404, statusText: err.message })	
	}
}
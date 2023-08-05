import { NextResponse } from 'next/server'


// Create new IReviewDocument from IReview and Return IReviewDocument with property
export const POST = async (req: Request) => {
	try {
		const body = await req.json()

		return NextResponse.json({
			review: body.review,
			date: new Date(),
			id: '1'
		})
		
	} catch (err: any) {
		return NextResponse.json(null, { status: 404, statusText: err.message })
	}
}
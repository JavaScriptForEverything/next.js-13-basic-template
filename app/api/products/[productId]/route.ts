import { NextResponse } from 'next/server'



export const GET = (req: Request, { params }: { params: { productId: string } }) => {

	const { productId } = params
	console.log({ productId })

	// const { searchParams } = new URL(req.url)
	// console.log(searchParams)

	return NextResponse.json({
		status: 'success'
	}, { status: 200, })
}
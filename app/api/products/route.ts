import * as productController from '@/database/controllers/product'
import { dbConnect } from '@/database/dbConnect'
import Product from '@/database/models/product'
import { NextResponse } from 'next/server'

dbConnect()

// export const GET = productController.getProducts(NextResponse)
// export const GET = (Request: Request) => productController.getProducts(Request, NextResponse)


export const POST = async(req: Request) => {
	const body = await req.json()

	return NextResponse.json({
		status: 'success',
		data: body
	}, { status: 201 })
}
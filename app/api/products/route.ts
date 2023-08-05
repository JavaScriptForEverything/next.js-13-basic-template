// import * as productController from '@/database/controllers/product'
// import { dbConnect } from '@/database/dbConnect'
// import Product from '@/database/models/product'
import { IProduct, IProductDocument, IResponse } from '@/types'
import { NextResponse } from 'next/server'
// dbConnect()

// export const GET = productController.getProducts(NextResponse)
// export const GET = (Request: Request) => productController.getProducts(Request, NextResponse)


export const POST = async(req: Request): Promise<NextResponse< (IResponse<IProductDocument> | null) >> => {
	try {
		const body: IProduct = await req.json() 

		// if(true) throw new Error('something went wrong')

		return NextResponse.json({
			status: 'success',
			data: {
				...body,
				_id: '',
				id: '',
				createdAt: new Date(),
				updatedAt: new Date()

			}
		}, { status: 201 })

	} catch (err: any) {

		return NextResponse.json(null, { status: 404, statusText: err.message })	
	}
}
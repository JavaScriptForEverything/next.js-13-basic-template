import type { NextResponse } from 'next/server'
import Product from '@/database/models/product'

export const getProducts = async(req: Request, res: typeof NextResponse) => {

	const { searchParams } = new URL(req.url)

	// 1. Manually handle Search Query
	// const _page = searchParams.get('_page')
	// const _limit = searchParams.get('_limit')
	// console.log({ _page, _limit })

	// 2. Dynamically handle Search Query
	const searchObject = Object.fromEntries(	searchParams.entries() )
	console.log(searchObject)

	// const products = await Product.find()
	// const data = products
	// console.log(data, typeof data)

	return res.json({
		status: 'success',
		data: searchObject	
	})
}

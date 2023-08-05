'use client'

import { IProduct, IProductDocument, IResponse } from '@/types'
// import type { Product } from '@/shared/types'
// import { store } from '@/store'

import { useState } from 'react'

// type Props = {
// 	products: Product[]
// }
const ProductDetails = () => {
	// const [ productId, setProductId ] = useState(1)


	const addProductHandler = async () => {
		const product: IProduct = {
			name: 'product 1',
			price: 20
		}

		try {
			const res = await fetch(`/api/products`, {
				method: 'post',
				body: JSON.stringify(product)
			})

			if( !res.ok ) throw new Error(res.statusText)

			const data = await res.json() as IResponse<IProductDocument>
			console.log(data)

		} catch (err: any ) {
			console.log(err)
			console.log(err.message)	
		}

	}

	return (
		<>
			<p>Product details</p>

			<button onClick={addProductHandler}>addProduct</button>
			
			<pre>
				{/* {JSON.stringify(products, null, 2)} */}
			</pre>
		</>
	)
}
export default ProductDetails


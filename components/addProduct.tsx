'use client'
import * as productReducer from '@/store/productReducer'
import { Product } from '@/shared/types'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

type Props = {
	products: Product[]
}
const AddProduct = ({ products }: Props) => {

	const dispatch = useAppDispatch()
	// const { products } = useAppSelector(state => state.product)

	const getProductHandler = () => {
		dispatch( productReducer.addProducts(products) )
	}

	return (
		<>
			
			<button onClick={getProductHandler}>add Products</button>
		</>
	)
}
export default AddProduct

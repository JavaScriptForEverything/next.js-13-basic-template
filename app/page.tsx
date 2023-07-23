import Link from 'next/link'

import Typography from '@mui/material/Typography'
import AddProduct from '@/components/addProduct'
import GetProducts from '@/components/getProduct'
import { store } from '@/store'
import { setProducts } from '@/store/productReducer'

const initialProducts = [
	{ name: 'product 1', price: 1 },
	{ name: 'product 2', price: 2 },
]

const newProducts = [
	{ name: 'product 3', price: 3 },
	{ name: 'product 4', price: 4 },
]

const HomePage = () => {
	store.dispatch(setProducts(initialProducts))

	return (
		<>
			<Typography color='primary'>Header</Typography>
			<Link href='/products'>Products</Link> <br />

			<AddProduct products={newProducts} />
			<GetProducts />

		</>
	)
}
export default HomePage



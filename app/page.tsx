import Link from 'next/link'

import AddProduct from '@/components/addProduct'
import GetProducts from '@/components/getProduct'
import { store } from '@/store'
import { setSsrProducts } from '@/store/slice/product'
import GetUsers from '@/components/getUsers'
import Preloader from '@/store/preloader/products'


const initialProducts = [
	{ name: 'product 1', price: 1 },
	{ name: 'product 2', price: 2 },
]

const newProducts = [
	{ name: 'product 3', price: 3 },
	{ name: 'product 4', price: 4 },
]



const HomePage = () => {
	store.dispatch(setSsrProducts(initialProducts))

	return (
		<>
			<Preloader products={initialProducts} />

			<Link href='/products'>Products</Link> <br />

			<AddProduct products={newProducts} />
			<GetProducts />

			
			<GetUsers />

		</>
	)
}
export default HomePage



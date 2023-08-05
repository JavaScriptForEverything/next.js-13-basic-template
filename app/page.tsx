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
		<section>
			<h4>Handle Request and Response with proper type (TypeScript)</h4>
			<small>How to Request and handle Error</small> <br />
			<small>How to Response for Success and Error</small> <br />

			<ul>
				<li>/app/product/page.tsx (handle Error in FrontSide)</li>
			</ul>

			<ul>
				<li>/app/api/products/route.ts  (response from API)</li>
			</ul>
		</section>

		<section>
			<h4>How to send Data to backend and Handle data in Backend</h4>
			<small>Various way to send data from ClientSide</small> <br />
			<small>Various way to handle data in Backend </small> <br />
			<ul>
				<li>/app/user/page.tsx</li>
				<li>/app/api/users/route.ts</li>
				<li>/app/api/users/[userId]/route.ts</li>
			</ul>
		</section>

		<section>
			<h4>Handle State via Redux Toolkit</h4>
			<small>How to fetch data </small> <br />
			<small>How to Response for Success and Error</small> <br />
			<small>handle asynchronous request in 2 ways</small> <br />
			<small>ServerSide Dispatch (See in Home Page example)</small> <br />
			<small>ClientSide Dispatch (same as React do)</small> <br />

			<ul>
				<li>/app/review/page.tsx</li>
				<li>/app/api/reviews/route.ts</li>
			</ul>
		</section>


			<Preloader products={initialProducts} />
			<Link href='/products'>Products</Link> <br />

			<AddProduct products={newProducts} />
			<GetProducts />

			
			<GetUsers />

		</>
	)
}
export default HomePage



import type { Product } from '@/shared/types'
import { store } from '@/store'

type Props = {
	products: Product[]
}
const ProductDetails = () => {
	const { products } = store.getState().product

	return (
		<>
			<p>Product details</p>
			
			<pre>
				{JSON.stringify(products, null, 2)}
			</pre>
		</>
	)
}
export default ProductDetails

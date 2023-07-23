'use client'
import { useAppSelector } from '@/store/hooks'

const GetProducts = () => {

	const { products } = useAppSelector( state => state.product )

	return (
		<pre>
			{JSON.stringify(products, null, 2)}
		</pre>
	)
}
export default GetProducts

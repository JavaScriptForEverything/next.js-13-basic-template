'use client'

import { Product } from '@/shared/types'
import { useRef } from 'react'
import { store } from '.'
import { actions } from '@/store/productReducer'

const Preloader = (products: Product[]) => {

	const loaded = useRef(false)

	if( !loaded.current ) {
		store.dispatch(actions.addProducts(products))
		loaded.current = true
	}

	return null
}
export default Preloader

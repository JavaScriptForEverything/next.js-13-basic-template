'use client'

import { Product } from '@/shared/types'
import { useLayoutEffect, useRef } from 'react'
import { store } from '..'
import { setSsrProducts } from '@/store/slice/product'
// import { useAppDispatch } from './hooks'

const Preloader = ({ products }: { products: Product[] } ) => {
	// const dispatch = useAppDispatch()
	
	// useLayoutEffect(() => {
	// 	dispatch(setProducts(products))
	// }, [dispatch, products])


	const loaded = useRef(false)
	if( !loaded.current ) {
		store.dispatch(setSsrProducts(products))
		loaded.current = true
	}

	return null
}
export default Preloader

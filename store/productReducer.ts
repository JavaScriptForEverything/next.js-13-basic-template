import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '.';

import type { Product } from '../shared/types';


type InitialStateProps = {
	loading: boolean,
	error: string,
	products: null | Product[]
}

const initialState: InitialStateProps = {
	loading: false,
	error: '',
	products: null
}

const { reducer, actions } = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<Product[]>) => ({
			...state,
			// products: action.payload 
			products: [ ...action.payload ]
		})
	}
})
export default reducer
export const { setProducts } = actions


export const addProducts = (products: Product[]) => (dispatch: AppDispatch) => {
	dispatch( actions.setProducts(products) )
}
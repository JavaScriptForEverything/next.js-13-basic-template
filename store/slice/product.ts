import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '..';

import type { Product } from '../../shared/types';


type InitialStateProps = {
	loading: boolean,
	error: string,
	products: Product[]
}

const initialState: InitialStateProps = {
	loading: false,
	error: '',
	products: []
}

const { reducer, actions } = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setSsrProducts: (state, action: PayloadAction<Product[]>) => ({
			...state,
			products: action.payload 
		}),
		setProducts: (state, action: PayloadAction<Product[]>) => ({
			...state,
			products: [ ...state.products, ...action.payload ]
		})

	}
})
export default reducer
export const { setSsrProducts } = actions


export const addProducts = (products: Product[]) => (dispatch: AppDispatch) => {
	dispatch( actions.setProducts(products) )
}
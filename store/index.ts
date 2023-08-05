import { configureStore } from '@reduxjs/toolkit';

import productSlice from './slice/product'
import userSlice from './slice/user';
import reviewSlice from './slice/review'

export const store = configureStore({
	reducer: {
		product: productSlice,
		user: userSlice,
		review: reviewSlice
	},
	devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
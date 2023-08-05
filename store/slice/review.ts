import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '..';


// dispatch( getReviewById(1) )
export const getReviewById = createAsyncThunk<any, number>('review/getReviewById', async(reviewId) => {
	const res = await fetch(`/api/reviews/${reviewId}`)

	if( !res.ok ) throw new Error(res.statusText)

	return await res.json()
})

type IReview = {
	review: string
	date?: Date
}
type InitialState = {
	loading: boolean
	error: string
	review: IReview | null
}

const initialState: InitialState = {
	loading: false,
	error: '',
	review: null
}

const { reducer, actions } = createSlice({
	name: 'review',
	initialState,
	reducers: {
		requested: (state) => ({ ...state, loading: true, error: '' }),
		failed: (state, { payload }: PayloadAction<string>) => ({ ...state, loading: false, error: payload }),
		clearError: (state) => ({ ...state, error: ''}),
		setReview: (state, { payload }: PayloadAction<IReview>) => ({ ...state, loading: false, review: payload })
	},
	extraReducers: (builder) => {
		builder.addCase(getReviewById.pending, (state ) => ({ ...state, loading: true, error: ''  }))
		builder.addCase(getReviewById.fulfilled, (state, { payload }: PayloadAction<IReview>) => ({ ...state, loading: false, review: payload }))

		builder.addCase(getReviewById.rejected, (state, action: any) => {

			// console.log({ message: action.error.message })
			return { ...state, loading: false, error: action.error.message }
		})


	}
})
export default reducer

/* No createAsyncThunk:
		- Don't use `createAsyncThunk` middleware, instead use this way, because
			handling error in the middleware is not working, and there is no documentations for that
*/
export const addReview = (review: IReview) => async (dispatch: AppDispatch) => {
	try {
		dispatch(actions.requested())
		// throw new Error('Testing Error')

		const res = await fetch('/api/reviews', { method: 'post', body: JSON.stringify(review) })
		if( !res.ok ) throw new Error(res.statusText)

		const data = await res.json() 		// backend data must be same as IReview

		dispatch(actions.setReview(data))

	} catch (err: any) {
		dispatch(actions.failed(err.message))

		// Remove Error after 5 seconds
		setTimeout(() => dispatch(actions.clearError()) , 5000);
	}

}

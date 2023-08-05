'use client'

import { AppDispatch, RootState } from '@/store'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addReview, getReviewById } from '@/store/slice/review'
import { useDispatch, useSelector } from 'react-redux'

const Review = () => {
	// const dispatch = useDispatch<AppDispatch>() 			// => Method-1: with react-redux hook
	const dispatch = useAppDispatch() 									// => Method-2: with custom hook


	// // => Method-1: with react-redux hook
	// const  { loading, error, ...review }  = useSelector( (state: RootState) => state.review)

	// // => Method-2: with react-redux hook
	const  { loading, error, ...review }  = useAppSelector( state => state.review)


	const addReviewHandler = () => {
		// // => Mehtod-1: By `reducers` property
		dispatch(addReview({ review: 'that was awesome'}))  // => POST /api/reviews

		// // => Mehtod-2: By `extraReducers` property
		// dispatch(getReviewById(4)) 											// => GET /api/reviews/:id
	}

	return (
		<>
			<h3>How to handle Redux Store</h3>

			{!!error && <h4 style={{ color: 'red' }}>{error}</h4>}

			<button onClick={addReviewHandler} disabled={loading} >Add Review</button>

			<h4>Show Reviews</h4>
			<pre>
				{JSON.stringify(review, null, 2)}
			</pre>
		</>
	)
}
export default Review

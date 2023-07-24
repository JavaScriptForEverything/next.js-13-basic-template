import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('user/getAllUsers', async (thunkApi) => {
	const res = await fetch('http://jsonplaceholder.typicode.com/users?_limit=5')
	const users = await res.json()
	return users
})


const { reducer, actions } = createSlice({
	name: 'user',
	initialState: {
		loading: false,
		error: '',
		entities: [] as any
	},
	reducers: {},
	extraReducers: (builder) => {
		// 2
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.entities.push(action.payload)
			state.loading = false
		})

		// 1
		builder.addCase(fetchUsers.pending, (state, action) => {
			state.loading = true
		})

	}
})
export default reducer
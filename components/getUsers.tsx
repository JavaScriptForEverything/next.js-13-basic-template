'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchUsers } from '@/store/slice/user'
import { useEffect, useRef } from 'react'

const GetUsers = () => {
	const dispatch = useAppDispatch()
	const { loading, entities } = useAppSelector(state => state.user)
	// console.log( entities )

	// // fetch 2 times
	// useEffect(() => {
	// 	dispatch(fetchUsers())
	// }, [dispatch])

	// Fetch Only once
	const isLoaded = useRef(false)
	useEffect(() => {
		if(!isLoaded.current) {
			dispatch(fetchUsers())
			isLoaded.current = true
		}
	}, [dispatch])



	return (
		<>

		{loading && <button>Loading...</button> }
		 
		 <pre>
			{JSON.stringify(entities, null, 2)}
		 </pre>
			
		</>
	)
}
export default GetUsers

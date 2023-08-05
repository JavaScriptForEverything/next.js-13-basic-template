'use client'

import { RootState } from '@/store'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const Profile = () => {
	const { entities } = useSelector((state: any ) => state.user)

	return (
		<>
			<p>Profile Page</p>

			<pre>
				{JSON.stringify(entities, null, 2)}
			</pre>
		</>
	)
}
export default Profile

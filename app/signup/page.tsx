'use client'

import Link from 'next/link'
import { useState } from 'react'

const credentials = {
	email: 		{ label: "Email", type: "email", placeholder: "example@example.com" },
	password: { label: "Password", type: "password" },
}

const tempObj: any = {}
Object.keys(credentials).forEach(key => {
	tempObj[key] = ''
})
// console.log(tempObj)

const SignUpPage = () => {
	const [ fields, setFields ] = useState({ email: '', password: '' })

	const changeHandler =  (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.target
		setFields({ ...fields, [name]: value })
	}

	const signupSubmitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		console.log(fields)
	}


	return (
		<>
			<form onSubmit={signupSubmitHandler}>

				{ Object.entries(credentials).map(([key, obj]) => (
					<div key={key}>
						<label>{obj.label}</label>
						<input key={key} {...obj} 
							name={key}
							value={fields[key as keyof typeof fields]}
							onChange={changeHandler}
						/>
					</div>
				))}

				<button>Sign Up</button>
			</form>


			<div>
				<Link href='/login'>
					<button>Login</button>
				</Link>
			</div>
		</>
	)
}
export default SignUpPage

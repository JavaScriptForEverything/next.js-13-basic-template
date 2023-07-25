'use client'

import Link from 'next/link'
import { useState } from 'react'

const listItems =  [
	{ label: "Email", 		name: 'email', type: "email", 		placeholder: "example@example.com" },
	{ label: "Password", 	name: 'password', type: "password", placeholder: "xxxxxxxx" },
]

const LoginPage = () => {
	const [ fields, setFields ] = useState({
		email: '',
		password: ''
	})
	const changeHandler = (name: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [name]: evt.target.value })
	}

	const loginSubmitHandler = async (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		// // 1.  'application/json'
		// const res = await fetch('/api/users', {
		// 	method: 'POST',
		// 	headers: {
		// 		'content-type': 'application/json',
		// 		accept: 'application/json'
		// 	},
		// 	body: JSON.stringify(fields)
		// })
		// const result = await res.json()
		// console.log(result)


		// // 2. multipart/form-data
		// const formData = new FormData()
		// // formData.append('email', 'abc@gmail.com')
		// // formData.append('password', 'my_super_secret')

		// Object.entries(fields).forEach(([key, value]) => {
		// 	formData.append(key, value)
		// })

		// const res = await fetch('/api/users', {
		// 	method: 'POST',
		// 	body: formData 													// => Content-Type: multipart/form-data
		// })
		// const result = await res.json()
		// console.log(result)




		// // 3.1 : Create Query String manually
		// const params = 'name=riajul&email=abc@gov.bd'

		// // 3.2 : Convert Object to QueryString
		// const params = new URLSearchParams(fields) 		//(default) application/x-www-form-urlencoded

		// const res = await fetch('/api/users', {
		// 	method: 'POST',
		// 	body: params,
		// })
		// const result = await res.json()
		// console.log(result)


		// // 3.3 : Convert Object => FormData => QueryString
		// const formData = new FormData()
		// // formData.append('email', 'abc@gmail.com')
		// // formData.append('password', 'my_super_secret')

		// Object.entries(fields).forEach(([key, value]) => {
		// 	formData.append(key, value)
		// })

		// const params = new URLSearchParams(formData as any)

		// const res = await fetch('/api/users', {
		// 	method: 'POST',
		// 	body: params,
		// })
		// const result = await res.json()
		// console.log(result)




		const blob = new Blob([ JSON.stringify( fields ) ], {
			type: 'application/json'
		})

		const formData = new FormData()
		formData.append('fields', blob) 			// send JSON data as Binary => BLOB
		formData.append('image', blob) 				// send Image or File, or any data as Binary Large Object

		const res = await fetch('/api/users', {
			method: 'post',
			body: formData,
			headers: {
				accept: 'application/json' 				// Only Receive JSON as Response
			}
		})
		const result = await res.json() 
		console.log(result)
	}

	return (
		<>
			<form onSubmit={loginSubmitHandler}>
				{listItems.map(({ label, name, type, placeholder }) => (
					<div key={name}>
						<label>{label}</label>
						<input 
							type={type}
							placeholder={placeholder}

							value={fields[name as keyof typeof fields]}
							onChange={changeHandler(name)}
						/>
					</div>
				))}

				<button>Login</button>
			</form>


			<br />
			<br />
			<br />

			<div>
				<Link href='/signup'>
					<button>Sign Up</button>
				</Link>
			</div>
		</>
	)
}
export default LoginPage

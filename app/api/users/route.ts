import { NextResponse } from 'next/server'

// // 1.  'application/json'
// export const POST = async (req: Request) => { 		
// 	const body = await req.json() 								// handle => application/json

// 	Object.entries(body).map(([key, value]) => {
// 		console.log(`${key} => ${value}`)
// 	})

// 	return NextResponse.json({
// 		status: 'success',
// 		data: body
// 	})
// }


// // 2. multipart/form-data
// export const POST = async (req: Request) => {
// 	const formData = await req.formData() 						// handle => multipart/form-data
	
// 	const data = new Map( formData.entries() ) 				// formData => new MAP()

// 	data.forEach( (value, key, map) => {
// 		console.log(`${key} => ${value}`)
// 	})

// 	return NextResponse.json({
// 		status: 'success',
// 		data: Object.fromEntries( formData.entries() ) 	// formData => {}
// 	})
// }


// // 3. application/x-www-form-urlencoded
// export const POST = async (req: Request) => { 		
// 	const body = await req.formData() 									// handle => application/x-www-form-urlencoded

// 	console.log(body)
// 	console.log(Object.fromEntries( body.entries() ))

// 	return NextResponse.json({
// 		status: 'success',
// 		data: Object.fromEntries( body.entries() )
// 	})
// }


/* 
	. How to access formData dynamically
	. Handle Blob for File and save as file

*/ 
export const POST = async (req: Request) => {
	const formDAta = await req.formData()

	new Map( formDAta.entries() ).forEach( async (value, key) => {
		const blob = new Blob([ value ]) 								// Step-1: Create Blob, (though already Blob)
		const arrayBuffer = await blob.arrayBuffer() 		// Step-2: To by Buffer, must be arrayBuffer
		const buf = Buffer.from(arrayBuffer) 						// Step-3: Now we get Buffer

		// Step-N: When we have buffer in Node.js 	all kind of operation is possible on that.
		const str = buf.toString('utf-8') 							// . Clent Send JSON String as Blob
		const json = JSON.parse(str) 										// . Finarry convert to JSON back
		console.log(`${key}: => ${json}`)
		
		console.log(value)
		// console.log(value.length)
	})

	return NextResponse.json({
		status: 'success',
		data: {
			message: 'We can save text as file, image as image file, ....'
		}
	})
}
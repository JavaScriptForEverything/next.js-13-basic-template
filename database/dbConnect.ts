import mongoose from 'mongoose'

const { NODE_ENV, MONGODB_LOCAL_URI, MONGODB_REMOTE_URI } = process.env

const MONGODB_URI = NODE_ENV === 'production' ? MONGODB_REMOTE_URI : MONGODB_LOCAL_URI  


if(!MONGODB_URI) {
	throw new Error('Please add your MONGODB_URI to .env.local')
}


let globalWithMongoose = global as typeof globalThis & { mongoose: any }

let cached = globalWithMongoose.mongoose
if(!cached) cached = globalWithMongoose.mongoose = { conn: null, promise: null }


// Note: Always connect in API page, not Normal Page, else it throw Error of missing `MONGODB_URI`
export const dbConnect = async () => {
	try {
		
		if(cached.conn) return cached.conn

		if(!cached.promise) {
			const options = { 
				bufferCommands: false,
				useNewUrlParser: true,
				useUnifiedTopology: true
			}

			cached.promise = mongoose.connect(MONGODB_URI, options)
		}

		cached.conn = await cached.promise
		// console.log('database connection successfull')

	} catch (err: any) {
		console.log(err.message)	
	}

}
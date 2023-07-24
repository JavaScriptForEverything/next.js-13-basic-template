import type { Types } from 'mongoose'

export type Product = {
	name: string
	price: number
}

export type ProductDocument = Product & {
	_id: Types.ObjectId
	id: string
	createdAt: Date
	updatedAt: Date
}
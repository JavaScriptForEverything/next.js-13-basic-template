
export type IProduct = {
	name: string
	price: number
}

export type IProductDocument = IProduct & {
	_id: string
	id: string,
	createdAt: Date
	updatedAt: Date
}
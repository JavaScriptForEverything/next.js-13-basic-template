import type { ProductDocument } from '@/shared/types'
import { Model, Schema, model, models } from 'mongoose'

const productSchema = new Schema<ProductDocument>({
	name: String,
	price: Number

}, {
	timestamps: true
})

const Product: Model<ProductDocument> = models.Product || model('Product', productSchema)
export default Product
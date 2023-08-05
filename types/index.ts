export * from './product'



export type IResponse<V = any> = {
	status: 'success' | 'failed',
	data: V
}
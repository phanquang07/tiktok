import { request } from '../utils/httpRequest'

export const searchServices = async (q, type = 'less') => {
	try {
		const res = await request({
			method: 'GET',
			url: 'users/search',
			params: {
				q,
				type,
			},
		})
		return res.data.data
	} catch (error) {
		console.log(error)
	}
}

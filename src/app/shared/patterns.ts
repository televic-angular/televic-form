export const patterns = {
	name: /^[\u4e00-\u9fa5]{1,}$/,	// chinese
	age: /^\d{1,2}$/,				// 1-99
	email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
	id: /^\d{15}|\d{18}$/			// id
}
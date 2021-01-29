import HttpClient from './index'

import * as url from './url-constants'

let req=function (arg, name) {
	console.log(arguments,6666);
	return new Promise((resolve, reject) => {
		HttpClient.post(name, arg).then(async (res) => {
			resolve(res)
		}).catch((err) => {
			reject(err)
		})
	})
}

export let reqQueryCondition=function () {
	console.log(arguments,2222);
	return req.call(this,...arguments,url.QUERY_CONDITION)
}

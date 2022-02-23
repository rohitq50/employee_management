import Fetch from './Fetch.js'
class RestApi {
	constructor() {
		this.fetchObject = new Fetch();
	}
	async getEmployees(page = null, limit = null) {
		let params = {}
		if(page !== null && limit !== null){
			params = {p: page, l: limit}
		}
		return await this.fetchObject.callApi("/employee", "GET", params)
	}
	async getEmployee(id) {
		let url = "/employee/" + id
		return await this.fetchObject.callApi(url, "GET")
	}
	async getEmployeeCheckins(id) {
		let url = "/employee/" + id + "/checkin"
		return await this.fetchObject.callApi(url, "GET")
	}
	async getEmployeeCheckin(id, checkingId) {
		let url = "/employee/" + id + "/checkin/" + checkingId
		return await this.fetchObject.callApi(url, "GET")
	}
}
export default RestApi;
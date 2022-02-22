import Fetch from './Fetch.js'
class RestApi {
	constructor() {
		this.fetchObject = new Fetch();
	}
	async getEmployees(page, limit) {
		return await this.fetchObject.callApi("/employee", "GET", {p: page, l: limit})
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
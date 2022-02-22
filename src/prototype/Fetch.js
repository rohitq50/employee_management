class Fetch {
	constructor() {
		this.BASE_URL = "https://620dfdda20ac3a4eedcf5a52.mockapi.io/api";
	}
	async callApi(endpoint = '', method = 'POST', data = {}) {
		if(endpoint == "") return;
		let urlEndpoint = this.BASE_URL + endpoint
		let option = {
			method: method,
			headers: {
				'Content-Type': 'application/json'
			}
		}
		if(method == "POST") {
			option.body = JSON.stringify(data)
		}
		else if (typeof data === "object" && Object.keys(data).length) {
			urlEndpoint += "?" + this.encodeQueryData(data)
		}
		console.log(urlEndpoint)
		let res = null;
		await fetch(urlEndpoint, option)
		.then(response => {
			if(response.status == 200) {
				return response.json()
			}
			return false
		})
		.then(data => res = data)
		.catch((error) => {
			console.error('Error:', error);
		});
		return res;
	}

	encodeQueryData(data) {
		const params = [];
		for (let d in data) {
			params.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
		}
		return params.join('&');
	 }
}
export default Fetch;
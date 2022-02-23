<template>
	<div class="card text-center">
		<div class="card-header">
			<employee-header />
		</div>
		<div class="card-body">
			<employee-list :employees="employees" @getEmployee="getEmployee"/>
		</div>
		<div class="card-footer text-muted">
			<pagination :page="page" :limit="limit" :list="employees" @getEmployees="getEmployees"/>
		</div>
	</div>
</template>


<script>
import EmployeeHeader from '../components/EmployeeHeader.vue'
import EmployeeList from '../components/EmployeeList.vue'
import Pagination from '../components/Pagination.vue'
export default {
  	components: { EmployeeHeader, EmployeeList, Pagination },
	name: "Employee",
	data() {
		return {
			employees: [],
			employee: {},
			page: 1,
			limit: 10
		}
	},
	async created() {
		this.getEmployees(this.page)
	},
	methods: {
		async getEmployees(page) {
			let p = page
			let l = this.limit
			if(page == -1) {
				p = null
				l = null
			}
			let data = await this.$restApi.getEmployees(p, l)
			// if(data.code != 200) {
			// 	console.log(`Something went wrong, Error code: ${data.code}`)
			// }
			if(page == -1) {
				console.log("here")
				let length = data.length
				this.page = (length / 10) + ((length % 10) != 0 ? 1 : 0)
				data = data.slice(length - 10)
			}
			else {
				this.page = page
			}
			this.employees = data
		},
		async getEmployee(id) {
			// this.employee = await this.$restApi.getEmployee(id)
		}
	}
}
</script>

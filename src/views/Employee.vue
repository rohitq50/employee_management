<template>
	<div class="card text-center">
		<div class="card-header">
			<employee-header />
		</div>
		<div class="card-body">
			<employee-list :employees="employees" @getEmployee="getEmployee"/>
		</div>
		<div class="card-footer text-muted">
			<pagination :page="page" :limit="limit" :list="employees"/>
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
		this.employees = await this.$restApi.getEmployees(this.page, this.limit)
		console.log(this.employees)
	},
	methods: {
		async getEmployee(id) {
			// this.employee = await this.$restApi.getEmployee(id)
		}
	}
}
</script>

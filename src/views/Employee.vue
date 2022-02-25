<template>
	<div class="card text-center">
		<div class="card-header">
			<employee-header :checkedItems="checkedItems" @selectAll="selectAll" @sortList="sortList" @searchList="searchList"/>
		</div>
		<div class="card-body">
			<employee-list
				:employees="employees"
				:checkedItems="checkedItems"
				:checkins="checkins"
				@getEmployee="getEmployee"
				@updateCheckedItem="updateCheckedItem"
				@getChekins="getChekins"
			/>
		</div>
		<div class="card-footer text-muted">
			<pagination :page="page" :limit="limit" :list="employees" @getEmployees="getEmployees" @changeLimit="changeLimit"/>
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
			checkins: [],
			page: 1,
			limit: 10,
			checkedItems: [],
			sortBy: null,
			searchStr: null,
			order: "acs"
		}
	},
	async created() {
		this.getEmployees(this.page)
	},
	methods: {
		async getEmployees(page) {
			this.employees = await this.getEmployeeList(page)
		},
		async getEmployee(id) {
			// this.employee = await this.$restApi.getEmployee(id)
		},
		async sortList(column, order) {
			this.employees = await this.getEmployeeList(this.page, this.limit, column, order)
		},
		async searchList(searchStr) {
			this.employees = await this.getEmployeeList(this.page, this.limit, this.column, this.order, searchStr)
		},
		async getChekins(employeeId) {
			if( ! this.checkins[employeeId]) {
				// Only fetch for new data
				this.checkins[employeeId] = await this.$restApi.getEmployeeCheckins(employeeId)
			}
		},
		changeLimit(newLimit) {
			this.limit = newLimit
			this.getEmployees(this.page)
		},
		updateCheckedItem(value) {
			this.checkedItems = value
		},
		selectAll(flag) {
			this.checkedItems = flag ? this.employees.map((item,index) => index) : []
		},
		async getEmployeeList(page = this.page, limit = this.limit, sortBy = this.sortBy, order = this.order, searchStr = this.searchStr) {
			let params = {}
			if(page != -1) {
				params.p = page
				params.l = limit
			}
			if(sortBy !== null) {
				params.sortBy = sortBy
			}
			if(order != "") {
				params.order = order
			}
			if(searchStr !== null) {
				params.search = searchStr
			}
			let data = await this.$restApi.getEmployees(params)
			// if(data.code != 200) {
			// 	console.log(`Something went wrong, Error code: ${data.code}`)
			// }
			if(page == -1) {
				let length = data.length
				this.page = (length / 10) + ((length % 10) != 0 ? 1 : 0)
				data = data.slice(length - 10)
			}
			else {
				this.page = page
			}
			return data
		}
	}
}
</script>

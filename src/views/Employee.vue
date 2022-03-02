<template>
	<div class="card text-center">
		<div class="card-header">
			<employee-header
				:checkedItems="checkedItems"
				@selectAll="selectAll"
				@sortList="sortList"
				@searchList="searchList"
				@openFilterModal="openFilterModal"
			/>
		</div>
		<div class="card-body">
			<employee-list
				:employees="employees"
				:checkedItems="checkedItems"
				:checkins="checkins"
				:sortBy="sortBy"
				@getEmployee="getEmployee"
				@updateCheckedItem="updateCheckedItem"
				@getChekins="getChekins"
				@getChekin="getChekin"
			/>
		</div>
		<div class="card-footer text-muted">
			<pagination
				:page="page"
				:limit="limit"
				:list="employees"
				@getEmployees="getEmployees"
				@changeLimit="changeLimit"
			/>
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
			employees: null,
			employee: {},
			checkins: [],
			page: 1,
			limit: 10,
			checkedItems: [],
			sortBy: null,
			searchStr: null,
			filterData: [],
			order: "acs",
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
			// Not required actually because the data is same in list.
			// this.employee = await this.$restApi.getEmployee(id)
		},
		async sortList(sortBy, order) {
			this.sortBy = sortBy
			this.employees = await this.getEmployeeList(this.page, this.limit, sortBy, order)
		},
		async searchList(searchStr) {
			this.searchStr = searchStr
			this.employees = await this.getEmployeeList(this.page, this.limit, this.sortBy, this.order, searchStr)
		},
		async getChekins(employeeId) {
			if( ! this.checkins[employeeId]) {
				// Only fetch for new data
				let data = await this.$restApi.getEmployeeCheckins(employeeId)
				this.$set(this.checkins, employeeId, data)
			}
		},
		async getChekin(employeeId, checkinId) {
			// let data = await this.$restApi.getEmployeeCheckin(employeeId, checkinId)
		},
		async openFilterModal(filterColumn, data) {
			this.filterData = {column: filterColumn, data: data}
			this.employees = await this.getEmployeeList(this.page, this.limit, this.sortBy, this.order, this.searchStr, this.filterData)
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
		async getEmployeeList(page = this.page, limit = this.limit, sortBy = this.sortBy, order = this.order, searchStr = this.searchStr, filterData = this.filterData) {
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
			if(filterData.length != 0) {
				params[filterData.column] = filterData.data
			}
			let data = await this.$restApi.getEmployees(params)
			if(page == -1) {  // if user selected the last page
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

<template>
	<div>
		<div class="d-flex justify-content-between">
			<div class="d-flex">
				<div class="input-group input-group-sm mb-3">
					<span class="input-group-text" id="input-search"><img src='../assets/searchIcon.svg' class="svg-bg"></span>
					<input type="text" class="form-control" aria-label="search-input" aria-describedby="input-search" @input="search()" v-model="searchText">
				</div>
			</div>
			<div class="d-flex">
				<p type="button" class="txt-sm me-1 mt-1 light-blue">+ Add Employee</p>
			</div>
		</div>
		<div class="d-flex justify-content-between">
			<div class="d-flex">
				<input class="form-check-input mx-1 m-auto" type="checkbox" value=""><span :class="['ms-1 mx-4 m-auto txt-sm', checkedItems.length ? 'fw-bold': '']">{{checkedItems.length}} Selected</span>
				<p type="button" class="txt-sm mx-4 m-auto" @click="selectAll()">Select All</p>
				<div class="d-flex mx-4">
					<img src='../assets/shareIcon.svg' class="svg-bg image-small">
					<p type="button" class="txt-sm ms-1 m-auto">Share</p>
				</div>
				<div class="d-flex mx-4">
					<img src='../assets/editIcon.svg' class="svg-bg image-small">
					<p type="button" class="txt-sm ms-1 m-auto">Edit</p>
				</div>
				<div class="d-flex mx-4">
					<img src='../assets/deleteIcon.svg' class="svg-bg image-small">
					<p type="button" class="txt-sm ms-1 m-auto">Delete</p>
				</div>
			</div>
			<div class="d-flex">
				<div class="d-flex mx-3">
					<img src='../assets/filter.svg' class="svg-bg image-small">
					<p type="button" class="txt-sm ms-1 m-auto" @click="filter()">Filter</p>
					<!-- Note: Filter not clear to me -->
				</div>
				<div class="d-flex mx-4">
					<img src='../assets/sortDown.svg' class="svg-bg image-small">
					<p type="button" class="txt-sm ms-1 m-auto" @click="sort()">Sort by</p>
				</div>
				<select class="form-select form-select-sm mx-1" aria-label="select-column" @change="onChange($event)" v-model="selectedColumn">
					<option v-for="(column, index) in columns" :key="index" :value="column">{{index}}</option>
				</select>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "EmployeeHeader",
	props: {
		checkedItems: {
			Type: Array,
			require: true
		}
	},
	data() {
		return {
			selectedColumn: "createdAt",
			columns: {ID: "id", Name: "name", Email: "email", Department: "department", Experience: "createdAt"},
			selectAllFlag: false,
			sortAscFlag: true,
			searchText: ""
		}
	},
	methods: {
		selectAll() {
			this.selectAllFlag = ! this.selectAllFlag
			this.$emit('selectAll', this.selectAllFlag)
		},
		filter() {
			// Filter not clear to me
		},
		sort() {
			if(this.selectedColumn == "") {
				alert("Please select culumn")
				return;
			}
			const order = this.sortAscFlag ? "asc" : "desc"
			this.sortAscFlag = ! this.sortAscFlag
			this.$emit('sortList', this.selectedColumn, order)
		},
		onChange() {
			this.sortAscFlag = true
		},
		search() {
			this.$emit('searchList', this.searchText)
		}
	},
}
</script>

<style lang="scss" scoped>
.input-group-sm {
	.input-group-text {
		padding: 0 !important;
	}
}
.image-small {
	width: 15px;
}
.form-select {
	width: auto;
}
.txt-sm {
	font-size: 0.875rem;
}
</style>
<template>
	<div class="d-flex">
		<div class="d-flex">
			<label for="select-page" class="form-label">Show</label>
			<select class="form-select form-select-sm" aria-label="select-page">
				<option v-for="page in pages" :key="page" :value="page">{{page}}</option>
			</select>
		</div>
		<div class="d-flex">
			<button type="button" class="btn btn-sm btn-light ms-1">&lt;&lt;</button>
			<button type="button" class="btn btn-sm btn-light ms-2 me-1">&lt;</button>
			<button v-for="page in pages" :key="page" type="button" class="btn btn-sm btn-light ms-1">{{page}}</button>
			<button :disable=" ! hasMorePages" type="button" class="btn btn-sm btn-light ms-2">&gt;</button>
			<button :disable=" ! hasMorePages" type="button" class="btn btn-sm btn-light ms-2">&gt;&gt;</button>
		</div>
		<div class="d-flex">
			<label for="jump-to-page" class="form-label">Jump to</label>
			<input type="number" aria-label="jump-to-page" class="form-control jump-input" :max="pages[pages.length - 1]" :min="page" v-model="currentPage">
		</div>
	</div>
</template>

<script>
export default {
	name: "Pagination",
	props: {
		page: {
			Type: Number,
			require: true
		},
		limit: {
			Type: Number,
			require: true
		},
		list: {
			Type: Array
		}
	},
	data() {
		return {
			currentPage: 1,
			hasMorePages: true
		}
	},
	computed: {
		pages() {
			let arr = []
			const currentPage = Number(this.currentPage);
			const page = Number(this.page);
			const limit = Number(this.limit);
			for(let i = currentPage + 1 - page; i < (currentPage + limit); i++) {
				arr.push(i)
			}
			return arr
		}
	}
}
</script>

<style lang="scss" scoped>
label {
	margin: 0.2rem 0.2rem 0 0 !important;
}
.btn {
	line-height: 0.5;
}
.jump-input {
	width: 65px !important;
	padding: 0 !important;
}
</style>
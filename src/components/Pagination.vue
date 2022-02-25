<template>
	<div class="d-flex">
		<div class="d-flex">
			<label for="select-page" class="form-label">Show</label>
			<select class="form-select form-select-sm" aria-label="select-page" @change="onChange($event)" v-model="currentLimit">
				<option v-for="p in maxLimit" :key="p" :value="p" :disabled="lastPage && lastPage <= p">{{p}}</option>
			</select>
		</div>
		<div class="d-flex">
			<button :disabled="currentPage == 1" type="button" :class="['btn btn-sm btn-light ms-1',  currentPage != 1 ? 'light-blue' : ''] " @click="navigatePage(0, 1)">&lt;&lt;</button>
			<button :disabled="currentPage == 1" type="button" :class="['btn btn-sm btn-light ms-1 me-1', currentPage != 1 ? 'light-blue' : '']" @click="navigatePage(-1)">&lt;</button>
			<button v-for="page in pages" :key="page" :disabled="lastPage && lastPage <= page" type="button" :class="['btn btn-sm btn-light ms-1 light-blue', currentPage == page ? 'active' : '']" @click="navigatePage(0, page)">{{page}}</button>
			<button :disabled=" ! hasMorePages" type="button" :class="['btn btn-sm btn-light ms-2',  hasMorePages ? 'light-blue' : '']" @click="navigatePage(1)">&gt;</button>
			<button :disabled=" ! hasMorePages" type="button" :class="['btn btn-sm btn-light ms-1',  hasMorePages ? 'light-blue' : '']" @click="navigatePage(0, -1)">&gt;&gt;</button>
		</div>
		<div class="d-flex">
			<label for="jump-to-page" class="form-label">Jump to</label>
			<input type="number" aria-label="jump-to-page" class="form-control jump-input" @input="onChange($event)" :max="pages[pages.length - 1]" :min="page" v-model="currentPage">
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
			currentLimit: this.limit,
			currentPage: 1,
			hasMorePages: true,
			lastPage: false,
			maxLimit: 20
		}
	},
	watch: {
		page(value) {
			this.currentPage = value
			if(this.list.length == 0) {
				this.lastPage = value
				this.hasMorePages = false
			}
		}
	},
	computed: {
		pages() {
			let arr = []
			const page = Number(this.page);
			const limit = Number(this.limit);
			let i = (page - 5) <= 0 ? 1 : page - 5
			let lastPage = i + limit
			while(i < lastPage) {
				arr.push(i)
				i++
			}
			this.currentPage = page
			return arr
		}
	},
	methods: {
		navigatePage(navigate, page = 0) {
			if(navigate == 0 && page != 0) {
				this.currentPage = page
			}
			else if(navigate == 0 && page == -1) {
				this.currentPage = -1
			}
			else if(navigate != 0) {
				this.currentPage += navigate
			}
			this.$emit("getEmployees", this.currentPage)
		},
		onChange(event) {
			if(this.currentLimit) {
				this.$emit("changeLimit", this.currentLimit)
			}
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
.active, .btn:hover {
  border-color: #6499dc;
}
</style>
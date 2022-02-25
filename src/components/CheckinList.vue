<template>
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Id :</th>
				<th>Location :</th>
				<th>Purpose :</th>
				<th>Checkin at:</th>
			</tr>
		</thead>
		<tbody>
			<tr v-if="checkins.length == 0">No record!</tr>
			<tr class="pointer" else v-for="(checkin,i) in checkins" :key="i" @click="getChekin(checkin.employeeId, checkin.id)">
				<td>{{checkin.id}}</td>
				<td>{{checkin.location}}</td>
				<td>{{checkin.purpose}}</td>
				<td>{{getDate(checkin.checkin)}}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	name: "CheckinList",
	props: {
		checkins: {
			Type: Array,
			require: true
		}
	},
	data() {
		return {
		}
	},
	methods: {
		getDate(date) {
			// Get local date & time
			return new Date(date).toLocaleDateString() + " " + new Date(date).getHours() + ":" + new Date(date).getMinutes() + ":" + new Date(date).getSeconds()
		},
		getChekin(employeeId, id) {
			this.$emit("getChekin", employeeId, id)
		},
	}
}
</script>

<style lang="scss" scoped>
.pointer {
	cursor: pointer;
}
</style>
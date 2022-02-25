<template>
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Checking id :</th>
				<th>Location :</th>
				<th>Purpose :</th>
				<th>Checkin at:</th>
			</tr>
		</thead>
		<tbody>
			<template v-for="(checkin,i) in checkins">
			<tr :key="i" @click="getChekin(checkin.id)">
				<td>{{checkin.id}}</td>
				<td>{{checkin.location}}</td>
				<td>{{checkin.purpose}}</td>
				<td>{{getDate(checkin.checkin)}}</td>
			</tr>
			</template>
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
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		}
	},
	methods: {
		getDate(date) {
			return new Date(date).getDate() +" "+ this.monthNames[new Date(date).getMonth()]
		},
		getChekin(id) {
			this.$emit("getChekin", id)
		},
	}
}
</script>
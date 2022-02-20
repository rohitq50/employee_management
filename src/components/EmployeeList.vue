<template>
	<div class="accordion" id="accordionExample">
		<table class="table table-hover">
			<thead>
				<tr>
					<th></th>
					<th>ID :</th>
					<th>Name :</th>
					<th>Position :</th>
					<th>Department :</th>
					<th>Email :</th>
					<th>Experience :</th>
					<th>Status :</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<template v-for="(employee,i) in employees">
				<tr :key="i" class="accordion-item" data-bs-toggle="collapse" :data-bs-target="'#collapse_'+i" aria-expanded="true" :aria-controls="'collapse_'+i" @click="getEmployee(employee.id)">
					<td><input class="form-check-input" type="checkbox" :value="i" :id="'check_'+i" v-model="checked"></td>
					<td>{{employee.id}}</td>
					<td class="d-flex">
						<profile-picture :imageUrl="employee.avatar" :showStatus="false"/>
						<span class="p-1">{{employee.name}}</span>
					</td>
					<td>-</td> <!-- node not found -->
					<td>{{getDepartment(employee.department)}}</td>
					<td>{{employee.email}}</td>
					<td>{{getExperience(employee.createdAt)}}</td>
					<td>-</td>
					<td>&#8942;</td>
				</tr>
				<tr :key="i+ '_detail'" :id="'collapse_'+i" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
					<td class="accordion-body" colspan="9">
						<dir class="d-flex justify-content-around">
							<div>
								<p><strong>Office</strong></p>
								<!-- node not found -->
								<p>{{employee.country}}</p>
							</div>
							<div>
								<p><strong>Subordinates</strong></p>
								<!-- node not found -->
								<p>-</p>
							</div>
							<div>
								<p><strong>Birthday</strong></p>
								<p>{{getBirthday(employee.birthday)}}</p>
							</div>
							<div>
								<p><strong>Contact</strong></p>
								<p>{{employee.phone}}</p>
							</div>
						</dir>
					</td>
				</tr>
				</template>
			</tbody>
		</table>
	</div>
</template>

<script>
import ProfilePicture from './ProfilePicture.vue';
export default {
  components: { ProfilePicture },
	name: "EmployeeList",
	props: {
		employees: {
			Type: Array,
			require: true
		}
	},
	data() {
		return {
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			checked: [],
		}
	},
	methods: {
		getExperience(date) {
			const year = new Date().getYear() - new Date(date).getYear();
			return year > 1 ? year + " years" :  year + " year"
		},
		getBirthday(date) {
			return new Date(date).getDate() +" "+ this.monthNames[new Date(date).getMonth()]
		},
		getEmployee(id) {
			this.$emit("getEmployee", id)
		},
		getDepartment(department) {
			const departments = []
			for(let dep of department) {
				departments.push(dep)
			}
			return departments.join(', ');
		}
	}
}
</script>
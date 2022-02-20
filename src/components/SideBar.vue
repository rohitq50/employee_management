<template>
	<div class="sidebar d-flex flex-column justify-content-between">
		<div class="d-flex flex-column center">
			<div @click="navigate('/message')" :class="['py-2 ps-3 pointer', activePath == '/message' ? 'active' : '']">
				<img src='../assets/inbox.svg' class="svg-bg">
			</div>
			<div @click="navigate('/')" :class="['py-2 ps-3 pointer', activePath == '/' ? 'active' : '']">
				<img src='../assets/homeicon.svg' class="svg-bg">
			</div>
			<div @click="navigate('/application')" :class="['py-2 ps-3 pointer', activePath == '/application' ? 'active' : '']">
				<img src='../assets/appsIcon.svg' class="svg-bg">
			</div>
			<div @click="navigate('/employee')" :class="['py-2 ps-3 pointer', activePath == '/employee' ? 'active' : '']">
				<img src='../assets/user-group-solid.svg' class="svg-bg">
			</div>
			<div @click="navigate('/calendar')" :class="['py-2 ps-3 pointer', activePath == '/calendar' ? 'active' : '']">
				<img src='../assets/calendarIcon.svg' class="svg-bg">
			</div>
			<div @click="navigate('/file')" :class="['py-2 ps-3 pointer', activePath == '/file' ? 'active' : '']">
				<img src='../assets/fileicon.svg' class="svg-bg">
			</div>
			<div @click="navigate('/settings')" :class="['py-2 ps-3 pointer', activePath == '/settings' ? 'active' : '']">
				<img src='../assets/settingsIcon.svg' class="svg-bg">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SideBar",
	props: {},
	data() {
		return {
			// svgNames: ["inbox-solid", "homeicon", "appsIcon", "user-group-solid", "calendarIcon", "fileicon", "settingsIcon"],
			activePath: '/employee'
		}
	},
	created() {
		this.navigate(window.location.pathname)
	},
	methods: {
		navigate(path) {
			this.activePath = path
			this.$router.push({path: path})
		}
	}
}
</script>

<style scoped lang="scss">
.sidebar {
	background-color:rgb(12, 36, 58);
	color: white;
	height:100vh;
	padding: 7px;
}
.svg-bg {
	background-color: inherit;
	width: 50%;
}
.active {
	background-color:rgb(252, 252, 252) !important;
	border-radius: 10px;
}
</style>
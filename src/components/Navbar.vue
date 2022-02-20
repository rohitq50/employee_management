<template>
	<header class="d-flex justify-content-between">
		<div class="ms-3 px-3 ">
			<h3>Employees</h3>
		</div>
		<div class="d-flex mx-3 my-1">
			<img src='../assets/inbox.svg' class="px-1 me-1 svg-bg">
			<img src='../assets/inbox.svg' class="px-1 me-2 svg-bg">
			<ProfilePicture imageUrl="http://placeimg.com/640/480" classes="d-flex" :showStatus="false"/>
			<button class="btn" >&#8964;</button>
		</div>
	</header>
</template>

<script>
import ProfilePicture from "./ProfilePicture.vue"
export default {
	name: 'Navbar',
	props: {
		userData: {
			Type: Object,
			default: () => {}
		}
	},
	components: {
		ProfilePicture
	},
	data() {
		return {
		}
	}
}
</script>

<style scoped lang="scss">
header {
	.svg-bg {
		background-color:rgb(255, 255, 255);
		height: 30px;
		width: 30px;
	}
	button {
		padding: 0.1rem 0.5rem;
	}
}
</style>

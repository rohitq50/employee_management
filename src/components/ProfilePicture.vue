<template>
	<div :class="['icon-container', classes]">
		<img :src="imageUrl" id="profile-img" class="profile-picture circle user-avatar">
		<div v-if="showStatus" :class="['status-circle', userData.status ? 'logged-in' : 'logged-out']"></div>
	</div>
</template>

<script>
export default {
	name: "ProfilePicture",
	props: {
		width: {
			default: "60%"
		},
		height: {
			default: "30%"
		},
		imageUrl: {
			Type: URL
		},
		showStatus: {
			default: true
		},
		classes: {
			default: "margin-auto"
		}
	}
}
</script>

<style scoped>
.icon-container {
	width: inherit;
	height: inherit;
	position: relative;
	display: block;
}
img {
	height: 30px;
	width: 30px;
	border-radius: 50%;
}
.status-circle {
	width: 15px;
	height: 15px;
	border-radius: 50%;
	border: 1px solid rgb(34, 83, 26);
	bottom: 0;
	right: 0;
	position: absolute;
}
</style>
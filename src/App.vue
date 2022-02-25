<template>
	<div id="app" class="d-flex">
		<div class="sidebar">
			<side-bar class="side"/>
		</div>
		<div class="flex-grow-1" >
			<navbar />
			<router-view />
		</div>
	</div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Navbar from '@/components/Navbar.vue'
export default {
	name: 'App',
	components: { SideBar, Navbar},
}
</script>

<style lang="scss">
.sidebar {
	width: 4rem;
}
.light-blue {
	color: #6499dc !important;
}
</style>

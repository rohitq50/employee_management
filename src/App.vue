<template>
	<div id="app" class="d-flex">
		<div class="sidebar">
			<side-bar class="side"/>
		</div>
		<div class="flex-grow-1" >
			<navbar />
			<router-view @setVertical="vertical = true"/>
		</div>
	</div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Navbar from '@/components/Navbar.vue'
export default {
	name: 'App',
	components: { SideBar, Navbar},
	data() {
		return {
			vertical: false
		}
	},
	watch:{
    	$route (){
			//to, from
			//set here the initial value for new routes
        	this.vertical = false
    	}
	} ,
	methods: {
	}
}
</script>
<style lang="scss">
.sidebar {
	width: 4rem;
}
</style>

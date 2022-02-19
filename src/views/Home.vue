<template>
	<main>
		<BasicInfo msg="Welcome to Your Vue.js App"/>
	</main>
</template>

<script>
// @ is an alias to /src
import BasicInfo from '@/components/BasicInfo.vue'

export default {
	name: 'Home',
	components: {
		BasicInfo
	}
}
</script>

<style lang="scss" scoped>

</style>

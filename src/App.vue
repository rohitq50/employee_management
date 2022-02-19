<template>
	<div id="app">
		<Navbar />
		<router-view @setVertical="vertical = true"/>
		<Footer :vertical="vertical" />
	</div>
</template>

<style lang="scss">

</style>

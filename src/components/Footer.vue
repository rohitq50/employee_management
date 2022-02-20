<template>
	<footer>
		<div :class="['social footer-left', vertical ? 'social-vertical' : '']">
			<a href="https://twitter.com/Rohitq50" target="_blank">
				<i class="fab fa-twitter fa-2x"></i>
			</a>
			<a href="https://www.facebook.com/rohitsenq50" target="_blank">
				<i class="fab fa-facebook fa-2x"></i>
			</a>
			<a href="https://www.instagram.com/rohitq50/" target="_blank">
				<i class="fab fa-instagram fa-2x"></i>
			</a>
			<a href="https://www.linkedin.com/in/rohitq50/" target="_blank">
				<i class="fab fa-linkedin fa-2x"></i>
			</a>
		</div>
		<div :class="vertical ? 'vertical' : ''">&copy;Copyright 2021</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	props: {
		vertical : {
			Type: Boolean,
			default: false,
			require: true
		}
	}
}
</script>


<style lang="scss" scoped>
.footer-left{
	font-size: 1rem;
    position: fixed;
    bottom: 0.4rem;
    left: 1rem;
    text-align: left;
    padding: 1rem;
    color: #fff;
}
.vertical {
	transform:
		rotate(90deg)
		translate(-3rem, -5rem)
}
.social-vertical {
	display: flex;
	flex-direction: column;
}
</style>
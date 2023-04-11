<script>
	import '../app.scss';
</script>

<svelte:head>
	<title>3D Product Review</title>
</svelte:head>

<div class="layout-wrapper">
	<slot />

	<footer>
		<span>
			🛋️ Created by: <a href="https://github.com/ericknathan" target="_blank">Erick Nathan</a>
		</span>
	</footer>
</div>

<style lang="scss">
	.layout-wrapper {
		footer {
			position: fixed;
			bottom: 2rem;
			right: 2rem;

			span a {
				color: var(--primary-light);
			}
		}
	}
</style>

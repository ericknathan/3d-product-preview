<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Product3DModel from '$lib/components/Product3DModel.svelte';

	$: isRotating = true;
</script>

<div id="app">
	<div>
		<Product3DModel {isRotating} />
	</div>
	<div id="details">
		<span>CODE: 42404</span>
		<h1>Sofá Aidian Corner II - Grey</h1>
		<h2>US$ 4.000</h2>
		<Button>Add to cart</Button>
	</div>
</div>

<style lang="scss">
	#app {
		display: flex;

		height: 100vh;
		width: 100vw;

		> * {
			flex: 1;
			padding: 1.5rem;
		}

		#details {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			gap: 0.75rem;

			span {
				font-weight: 300;
				font-size: 1rem;
			}

			h1 {
				font-family: 'Crimson Pro', serif;
				font-size: 3rem;
			}

			h2 {
				font-size: 1.5rem;
				color: var(--primary-light);
				font-weight: 400;
			}
		}
	}
</style>

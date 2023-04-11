<button>
  <slot />
</button>

<style lang="scss">
	button {
		padding: 0.5rem 1rem;
		border-radius: 999px;
		margin-top: 0.5rem;

		color: var(--primary);
		background-color: transparent;
		border: 0.5px solid var(--primary);

		font-size: 1.125rem;
    text-transform: uppercase;

		cursor: pointer;
		transition: all 0.2s ease-in-out;

		&:hover {
			background-color: var(--primary);
			color: var(--background);
			opacity: 0.9;
		}
	}
</style>

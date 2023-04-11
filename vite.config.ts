import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three', 'troika-three-text', 'three/examples', 'three/examples/jsm/objects/GroundProjectedEnv']
	}
});

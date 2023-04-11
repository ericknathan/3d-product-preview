<script>
	import { Canvas, OrbitControls, Three } from '@threlte/core';
	import { AmbientLight, DirectionalLight, PerspectiveCamera } from 'three';
	import { degToRad } from 'three/src/math/MathUtils';

	import { Environment, GLTF } from '@threlte/extras';

	export let isRotating = false;

	let target = { y: 0.8 };
</script>

<div id="threed-model">
	<button on:click={() => (isRotating = !isRotating)}>
		<img src={isRotating ? '/icons/x.svg' : '/icons/360.svg'} alt="" />
	</button>

	<Canvas>		
		<Three type={PerspectiveCamera} makeDefault position={[2.25, 0.8, 10]} fov={24}>
			<OrbitControls
				autoRotate={isRotating}
				maxPolarAngle={degToRad(90)}
				enableZoom={false}
				enableRotate={isRotating}
				{target}
			/>
		</Three>

		<!-- <Three type={DirectionalLight} castShadow position={[3, 10, 10]} />
		<Three type={DirectionalLight} position={[-3, 10, -10]} intensity={0.2} />
		<Three type={AmbientLight} intensity={0.2} /> -->
		<Three type={DirectionalLight} castShadow position={[3, 10, 10]} />
		<Three type={DirectionalLight} position={[-3, 10, -10]} intensity={0.2} />
		<Three type={AmbientLight} intensity={0.2} />
		<GLTF castShadow url="/models/sofa-margot.glb" interactive scale={0.02} />
	</Canvas>
</div>

<style lang="scss">
	div {
		position: relative;

		height: 100%;
		width: 100%;

		button {
			all: unset;
			cursor: pointer;

			position: absolute;
			top: 25%;
			right: 1.5rem;

			img {
				width: 2rem;
				height: 2rem;
			}
		}
	}
</style>

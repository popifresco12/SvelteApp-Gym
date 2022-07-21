import App from './App.svelte';
import './firebase';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
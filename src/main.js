import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'My great application!'
	}
});

export default app;
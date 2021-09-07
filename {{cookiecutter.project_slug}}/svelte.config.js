/** @type {import('@sveltejs/kit').Config} */
import node from "@sveltejs/adapter-node";

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: node({ env: { port: process.env.PORT } }),
		vite: () => ({
			server: {
				proxy: {
					'/api': {
						target: 'http://localhost:8000',
						changeOrigin: true
					}
				}
			}
		})
	}
};

export default config;

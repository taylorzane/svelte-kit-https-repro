const key = []
const cert = []
const ca = []

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    vite: {
      server: {
        https: {
          key,
          cert,
          ca
        }
      }
    }
	}
};

export default config;

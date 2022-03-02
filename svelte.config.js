// // @filename: ambient.d.ts
//  declare module 'path';

// // @filename: index.js
import path from 'path';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      fallback: '200.html',
    }),
    vite: {
      resolve: {
        alias: {
          '~': path.resolve('./src'),
        },
      },
    },
    paths: {
      base: dev ? '' : '/text-editor',
    },
    // If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
    // For example, instead of '_app', use 'app_', 'internal', etc.
    // appDir: 'internal',
  },
};

export default config;

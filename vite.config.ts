import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: './assets/sass/style.ts',   // Votre entrée JS/TS
				style: './assets/sass/style.scss',  // Votre entrée SASS/SCSS/CSS
				home: './assets/js/home.js'
			},
			output: {
				dir: 'dist',  // le répertoire de sortie
				format: 'es',  // Format du module. "es" est pour ES module.
				entryFileNames: `[name].js`, // Format personnalisé pour les noms de fichiers d'entrée
				chunkFileNames: `[name].js`, // Format personnalisé pour les noms de fichiers chunk
				assetFileNames: `[name].[ext]` // Format personnalisé pour les noms de fichiers d'assets (comme CSS)
			},
			plugins: [
				babel({
					babelHelpers: 'bundled',
					extensions: ['.js', '.ts']  // ajoutez d'autres extensions si nécessaire
				})
			]
		}
	},
	css: {
		postcss: {
			plugins: [
				autoprefixer({})
			],
		}
	},
	server: {
		port: 1337,
		host: '0.0.0.0',
	},
});
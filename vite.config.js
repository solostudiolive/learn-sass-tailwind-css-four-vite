import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	root: "./",
	base: "./",
	build: {
		outDir: "dist",
		emptyOutDir: true,
		minify: true,
		cssMinify: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	css: {
		devSourcemap: true,
	},
});

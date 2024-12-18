// tailwind.config.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
	  extend: {
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		colors: {},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  
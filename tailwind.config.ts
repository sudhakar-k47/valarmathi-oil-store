import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom colors for Valarmathi Oil Store
				olive: {
					50: '#f9faf5',
					100: '#f1f4e9',
					200: '#dfe6c7',
					300: '#c4d39a',
					400: '#a7bc6c',
					500: '#8ba446',
					600: '#6b8035',
					700: '#52632d',
					800: '#435029',
					900: '#394425',
					950: '#1d2511',
				},
				terracotta: {
					50: '#fcf5f2',
					100: '#f9e8e1',
					200: '#f4d0c0',
					300: '#ecae95',
					400: '#e08363',
					500: '#d6613e',
					600: '#c74a2d',
					700: '#a53826',
					800: '#883026',
					900: '#702c22',
					950: '#3c130e',
				},
				cream: {
					50: '#FAF5E0', // Main color from user
					100: '#F5EED1',
					200: '#F0E7C0',
					300: '#EBE0B0',
					400: '#E6D9A0',
					500: '#E1D290',
					600: '#DCC980',
					700: '#D7C270',
					800: '#D2BB60',
					900: '#CDB450',
					950: '#C8AD40',
				},
				// New colors as requested
				salmon: {
					50: '#FFF5F2',
					100: '#FFE6DC',
					200: '#FFD1C0',
					300: '#FFB39A',
					400: '#E68B67', // Main color from user
					500: '#D66F4E',
					600: '#C45A35',
					700: '#AB461F',
					800: '#8C3514',
					900: '#6D260C',
					950: '#4C1505',
				},
				teal: {
					50: '#effafa',
					100: '#d5f3f3',
					200: '#ade8e8',
					300: '#78d8d8',
					400: '#44c2c2',
					500: '#2aacac',
					600: '#008080', // Main teal color
					700: '#166969',
					800: '#165555',
					900: '#164747',
					950: '#042b2b',
				},
				blue: {
					50: '#eff3ff',
					100: '#dbe4ff',
					200: '#bfd0ff',
					300: '#95b0ff',
					400: '#678aff',
					500: '#4066ff',
					600: '#0000ff', // Main blue color
					700: '#1332e2',
					800: '#1628b7',
					900: '#172593',
					950: '#121858',
				}
			},
			fontFamily: {
				serif: ['Playfair Display', 'serif'],
				sans: ['Inter', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"fade-out": {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(10px)" }
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
				"slide-in": {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"text-reveal": {
					"0%": { transform: "translateY(100%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"bounce-in": {
					"0%": { transform: "scale(0.8)", opacity: "0" },
					"50%": { transform: "scale(1.05)" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
				"logo-reveal": {
					"0%": { letterSpacing: "-0.5em", opacity: "0" },
					"40%": { opacity: "0.6" },
					"100%": { letterSpacing: "normal", opacity: "1" }
				},
				"pulse": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.5" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.4s ease-out",
				"fade-out": "fade-out 0.4s ease-out",
				"scale-in": "scale-in 0.3s ease-out",
				"slide-in": "slide-in 0.5s ease-out",
				"text-reveal": "text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
				"bounce-in": "bounce-in 0.6s ease-out",
				"logo-reveal": "logo-reveal 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
				"pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

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
			fontFamily: {
				'sans': [
					'SF Pro Display', 
					'-apple-system', 
					'BlinkMacSystemFont', 
					'Segoe UI', 
					'Roboto', 
					'Oxygen', 
					'Ubuntu', 
					'Cantarell', 
					'Fira Sans', 
					'Droid Sans', 
					'Helvetica Neue', 
					'sans-serif'
				],
				'orbitron': ['SF Pro Display', '-apple-system', 'sans-serif'],
				'titillium': ['SF Pro Display', '-apple-system', 'sans-serif'],
				'inter': ['SF Pro Display', '-apple-system', 'sans-serif'],
				'space': ['SF Pro Display', '-apple-system', 'sans-serif'],
			},
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
				neon: '#32bea3',
				dark: {
					DEFAULT: '#0a0a0a',
					lighter: '#121212',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'glow-pulse': {
					'0%, 100%': { 
						textShadow: '0 0 8px rgba(50, 190, 163, 0.6), 0 0 20px rgba(50, 190, 163, 0.3)'
					},
					'50%': { 
						textShadow: '0 0 15px rgba(50, 190, 163, 0.8), 0 0 30px rgba(50, 190, 163, 0.5)'
					},
				},
				'border-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(50, 190, 163, 0.5), 0 0 15px rgba(50, 190, 163, 0.3), inset 0 0 5px rgba(50, 190, 163, 0.2)'
					},
					'50%': { 
						boxShadow: '0 0 10px rgba(50, 190, 163, 0.8), 0 0 25px rgba(50, 190, 163, 0.5), inset 0 0 10px rgba(50, 190, 163, 0.3)'
					},
				},
				'matrix-fall': {
					'0%': { 
						transform: 'translateY(-100%)',
						opacity: '0'
					},
					'50%': { 
						opacity: '0.5'
					},
					'100%': { 
						transform: 'translateY(100vh)',
						opacity: '0'
					},
				},
				'ripple': {
					'0%': { 
						transform: 'scale(0)',
						opacity: '1'
					},
					'100%': { 
						transform: 'scale(4)',
						opacity: '0'
					},
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'border-glow': 'border-glow 2s ease-in-out infinite',
				'matrix-fall': 'matrix-fall 15s linear infinite',
				'ripple': 'ripple 0.8s ease-out'
			},
			boxShadow: {
				'neon': '0 0 5px rgba(50, 190, 163, 0.5), 0 0 20px rgba(50, 190, 163, 0.3)',
				'neon-strong': '0 0 10px rgba(50, 190, 163, 0.7), 0 0 30px rgba(50, 190, 163, 0.5)',
				'neon-inner': 'inset 0 0 10px rgba(50, 190, 163, 0.3)',
			},
			textShadow: {
				'neon': '0 0 8px rgba(50, 190, 163, 0.6), 0 0 20px rgba(50, 190, 163, 0.3)',
				'neon-strong': '0 0 15px rgba(50, 190, 163, 0.8), 0 0 30px rgba(50, 190, 163, 0.5)',
			},
			backgroundImage: {
				'gradient-dark': 'linear-gradient(180deg, #0a0a0a 0%, #121212 100%)',
				'gradient-radial': 'radial-gradient(circle, rgba(50, 190, 163, 0.15) 0%, rgba(10, 10, 10, 0) 70%)',
				'grid-pattern': 'linear-gradient(rgba(50, 190, 163, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(50, 190, 163, 0.1) 1px, transparent 1px)',
			},
			backgroundSize: {
				'grid-size': '40px 40px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

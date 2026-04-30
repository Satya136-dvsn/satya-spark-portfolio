import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
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
				mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
				tron:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
				grotesk: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
				sans:    ['"Space Grotesk"', 'system-ui', 'sans-serif'],
			},
			colors: {
				border:     'hsl(var(--border))',
				input:      'hsl(var(--input))',
				ring:       'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT:    'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT:    'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT:    'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT:    'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT:    'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT:    'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT:    'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT:              'hsl(var(--sidebar-background))',
					foreground:           'hsl(var(--sidebar-foreground))',
					primary:              'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent:               'hsl(var(--sidebar-accent))',
					'accent-foreground':  'hsl(var(--sidebar-accent-foreground))',
					border:               'hsl(var(--sidebar-border))',
					ring:                 'hsl(var(--sidebar-ring))'
				},
				// Tron semantic tokens — use directly in components
				tron: {
					void:    '#01060F',
					surface: '#050D1A',
					grid:    '#0A1628',
					panel:   '#081220',
					cyan:    '#00E5FF',
					orange:  '#FF6B00',
					white:   '#E8F4FD',
					muted:   '#3D6B88',
					ghost:   '#1A3A52',
				}
			},
			borderRadius: {
				// Sharp geometry system — no softness
				none:  '0px',
				sm:    '0px',
				DEFAULT:'0px',
				md:    '0px',
				lg:    '0px',
				xl:    '0px',
				'2xl': '0px',
				'3xl': '0px',
				sharp: '2px',     // 2px only for tags/badges
				full:  '9999px',  // preserved for pills where explicitly needed
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to:   { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to:   { height: '0' }
				},
				'laser-fall': {
					'0%':   { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'typewriter': {
					from: { width: '0' },
					to:   { width: '100%' }
				},
				'blink-cursor': {
					'0%, 100%': { borderRightColor: '#00E5FF' },
					'50%':      { borderRightColor: 'transparent' }
				},
				'scan-line': {
					'0%':   { transform: 'translateY(-100%)', opacity: '0' },
					'10%':  { opacity: '1' },
					'90%':  { opacity: '1' },
					'100%': { transform: 'translateY(200%)', opacity: '0' }
				},
				'circuit-pulse': {
					'0%, 100%': { opacity: '0.15', boxShadow: '0 0 4px rgba(0,229,255,0.1)' },
					'50%':      { opacity: '0.6',  boxShadow: '0 0 12px rgba(0,229,255,0.4)' }
				},
				'data-flow': {
					'0%':   { transform: 'translateX(-100%)', opacity: '0' },
					'5%':   { opacity: '1' },
					'95%':  { opacity: '1' },
					'100%': { transform: 'translateX(100vw)', opacity: '0' }
				},
				'tron-entrance': {
					'0%':   { opacity: '0', transform: 'translateY(16px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%':   { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%':   { opacity: '0' },
					'100%': { opacity: '1' }
				},
			},
			animation: {
				'accordion-down':  'accordion-down 0.2s ease-out',
				'accordion-up':    'accordion-up 0.2s ease-out',
				'laser-fall':      'laser-fall 6s linear infinite',
				'typewriter':      'typewriter 2.5s steps(40) 0.5s forwards',
				'blink-cursor':    'blink-cursor 0.8s step-end infinite',
				'scan-line':       'scan-line 3s ease-in-out infinite',
				'circuit-pulse':   'circuit-pulse 2s ease-in-out infinite',
				'data-flow':       'data-flow 8s linear infinite',
				'tron-entrance':   'tron-entrance 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
				'slide-up':        'slide-up 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
				'fade-in':         'fade-in 0.4s ease forwards',
			},
			boxShadow: {
				'tron-sm':  '0 0 8px rgba(0,229,255,0.2)',
				'tron-md':  '0 0 16px rgba(0,229,255,0.25), 0 0 4px rgba(0,229,255,0.4)',
				'tron-lg':  '0 0 32px rgba(0,229,255,0.2), 0 0 8px rgba(0,229,255,0.35)',
				'tron-xl':  '0 0 60px rgba(0,229,255,0.15), 0 0 20px rgba(0,229,255,0.3)',
				'orange-sm':'0 0 8px rgba(255,107,0,0.3)',
				'orange-md':'0 0 16px rgba(255,107,0,0.3)',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;

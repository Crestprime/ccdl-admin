/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'OpenRunde-Bold': ['OpenRunde-Bold'],
				'OpenRunde-SemiBold': ['OpenRunde-SemiBold'],
				'OpenRunde-Medium': ['OpenRunde-Medium'],
				'OpenRunde-Regular': ['OpenRunde-Regular']
			},
			colors: {
				bodyTextColor: '#667085',
				headerTextColor: '#101828',
				primaryColor: '#3170F3',
				primary25: "#F5F8FF",
				primary50: "#EAF1FE",
				primary100: "#BFD3FB",
				primary500: "#3170F3",
				primary600: "#2D66DD",
				primary700: "#2350AD",
				primary800: "#1B3E86",
				fushsia600: "#D444F1",
				yellow25: "#FEFDF0",
				teal25: "#F6FEFC",
				pink25: "#FCE7F6",
				gray25: "#FCFCFD",
				gray50: "#F9FAFB",
				gray100: "#F2F4F7",
				gray200: "#EAECF0",
				gray300: "#D0D5DD",
				gray500: "#667085",
				gray600: "#475467",
				gray700: "#344054",
				gray800: "#1D2939",
				gray900: "#101828",
				Indigo100: "#E0EAFF",
				Indigo800: "#2D31A6",
				error100: "#FEE4E2",
				error600: "#D92D20",
				error700: "#B42318",
				error800: "#912018",
				success100: "#DCFAE6",
				success500: "#17B26A",
				success800: "#085D3A",
				blue100: "#D1E9FF",
				blue800: "#1849A9",
				orange100: "#FDEAD7",
				orange800: "#932F19",
				warning100: "#FEF0C7",
				warning600: "#DC6803",
				warning800: "#93370D",
				mainBackgroundColor: '#FFFFFF',
				secondaryBackgroundColor: '#EAECF0',
				borderColor: '#EAECF0',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}


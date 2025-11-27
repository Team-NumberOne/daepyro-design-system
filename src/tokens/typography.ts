export const typography = {
	fontFamily: {
		sans: [
			"Pretendard",
			"-apple-system",
			"BlinkMacSystemFont",
			"system-ui",
			"Roboto",
			"Helvetica Neue",
			"Segoe UI",
			"Apple SD Gothic Neo",
			"Noto Sans KR",
			"Malgun Gothic",
			"Apple Color Emoji",
			"Segoe UI Emoji",
			"Segoe UI Symbol",
			"sans-serif",
		].join(", "),
		mono: [
			"Menlo",
			"Monaco",
			"Consolas",
			"Liberation Mono",
			"Courier New",
			"monospace",
		].join(", "),
	},
	fontSize: {
		xs: "0.625rem", // 10px
		sm: "0.75rem", // 12px
		base: "0.9375rem", // 15px
		lg: "1.0625rem", // 17px
		xl: "1.125rem", // 18px
		"2xl": "1.25rem", // 20px
		"3xl": "1.5rem", // 24px
		"4xl": "2.125rem", // 34px (최대값)
	},
	fontWeight: {
		thin: 100,
		extralight: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	},
	lineHeight: {
		tight: 1.25,
		normal: 1.3,
		relaxed: 1.4,
	},
	letterSpacing: {
		tighter: "-0.05em",
		tight: "-0.025em",
		normal: "0em",
		wide: "0.025em",
		wider: "0.05em",
		widest: "0.1em",
	},
} as const;

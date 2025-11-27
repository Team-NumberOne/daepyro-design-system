export const radius = {
	none: "0",
	sm: "0.25rem", // 4px
	base: "0.5rem", // 8px
	md: "0.75rem", // 12px
	lg: "1rem", // 16px
	xl: "1.25rem", // 20px
	full: "9999px",
} as const;

export type Radius = typeof radius;
export type RadiusKey = keyof Radius;

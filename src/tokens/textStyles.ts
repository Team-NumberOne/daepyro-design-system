import { typography } from "./typography";

const baseTextStyle = {
	fontFamily: typography.fontFamily.sans,
} as const;

export const textStyles = {
	heading1: {
		...baseTextStyle,
		fontSize: typography.fontSize["4xl"],
		fontWeight: typography.fontWeight.bold,
		lineHeight: typography.lineHeight.tight,
	},
	heading2: {
		...baseTextStyle,
		fontSize: typography.fontSize["3xl"],
		fontWeight: typography.fontWeight.bold,
		lineHeight: typography.lineHeight.normal,
	},
	heading3: {
		...baseTextStyle,
		fontSize: typography.fontSize["2xl"],
		fontWeight: typography.fontWeight.semibold,
		lineHeight: typography.lineHeight.normal,
	},
	heading4: {
		...baseTextStyle,
		fontSize: typography.fontSize.xl,
		fontWeight: typography.fontWeight.semibold,
		lineHeight: typography.lineHeight.relaxed,
	},
	body1: {
		...baseTextStyle,
		fontSize: typography.fontSize.lg,
		fontWeight: typography.fontWeight.normal,
		lineHeight: typography.lineHeight.relaxed,
	},
	body2Bold: {
		...baseTextStyle,
		fontSize: typography.fontSize.base,
		fontWeight: typography.fontWeight.semibold,
		lineHeight: typography.lineHeight.relaxed,
	},
	body2Medium: {
		...baseTextStyle,
		fontSize: typography.fontSize.base,
		fontWeight: typography.fontWeight.medium,
		lineHeight: typography.lineHeight.relaxed,
	},
	caption: {
		...baseTextStyle,
		fontSize: typography.fontSize.sm,
		fontWeight: typography.fontWeight.medium,
		lineHeight: typography.lineHeight.relaxed,
	},
	overline: {
		...baseTextStyle,
		fontSize: typography.fontSize.xs,
		fontWeight: typography.fontWeight.normal,
		lineHeight: typography.lineHeight.relaxed,
	},
} as const;

import { typography } from "./typography";

export const textStyles = {
	heading1: {
		fontFamily: typography.fontFamily.sans,
		fontSize: typography.fontSize["4xl"],
		fontWeight: typography.fontWeight.bold,
		lineHeight: typography.lineHeight.tight,
	},
	heading2: {
		fontFamily: typography.fontFamily.sans,
		fontSize: typography.fontSize["3xl"],
		fontWeight: typography.fontWeight.bold,
		lineHeight: typography.lineHeight.normal,
	},
	heading3: {
		fontFamily: typography.fontFamily.sans,
		fontSize: typography.fontSize["2xl"],
		fontWeight: typography.fontWeight.semibold,
		lineHeight: typography.lineHeight.normal,
	},
	heading4: {
		fontFamily: typography.fontFamily.sans,
		fontSize: typography.fontSize.xl,
		fontWeight: typography.fontWeight.semibold,
		lineHeight: typography.lineHeight.relaxed,
	},
	body1: {
		fontFamily: typography.fontFamily.sans,
		fontSize: typography.fontSize.lg,
		fontWeight: typography.fontWeight.normal,
		lineHeight: typography.lineHeight.relaxed,
	},
	"body2-b": {
		fontFamily: typography.fontFamily.sans,
		fontSize: typography.fontSize.base,
		fontWeight: typography.fontWeight.semibold,
		lineHeight: typography.lineHeight.relaxed,
	},
	"body2-m": {
		fontFamily: typography.fontFamily.sans,
		fontSize: typography.fontSize.base,
		fontWeight: typography.fontWeight.medium,
		lineHeight: typography.lineHeight.relaxed,
	},
	caption: {
		fontFamily: typography.fontFamily.sans,
		fontSize: typography.fontSize.sm,
		fontWeight: typography.fontWeight.medium,
		lineHeight: typography.lineHeight.relaxed,
	},
	overline: {
		fontFamily: typography.fontFamily.sans,
		fontSize: typography.fontSize.xs,
		fontWeight: typography.fontWeight.normal,
		lineHeight: typography.lineHeight.relaxed,
	},
} as const;

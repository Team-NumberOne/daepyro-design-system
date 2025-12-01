import { style, styleVariants } from "@vanilla-extract/css";
import { colors, radius, shadows, textStyles } from "@/tokens";

const baseButton = style({
	...textStyles.heading4,
	padding: "0px 16px",
	borderRadius: radius.base,
	border: "none",
	cursor: "pointer",

	display: "grid",
	gridTemplateColumns: "24px 1fr 24px",
	alignItems: "center",
	transition: "background-color 0.2s, box-shadow 0.2s",
	width: "100%",
	height: "48px",
});

// Variant styles
export const buttonVariants = styleVariants({
	default: [
		baseButton,
		{
			backgroundColor: colors.grey[50],
			color: colors.grey[500],
			":hover": {
				backgroundColor: colors.grey[100],
			},
			selectors: {
				'&[data-pressed="true"]': {
					backgroundColor: colors.grey[100],
					boxShadow: shadows["btn-pressed"],
				},
				"&:disabled": {
					backgroundColor: colors.grey[50],
					color: colors.grey[300],
					cursor: "not-allowed",
				},
			},
		},
	],
	gray: [
		baseButton,
		{
			backgroundColor: colors.grey[800],
			color: colors.base.white,
			":hover": {
				backgroundColor: colors.grey[700],
			},
			selectors: {
				'&[data-pressed="true"]': {
					backgroundColor: colors.grey[900],
					boxShadow: shadows["btn-pressed"],
				},
				"&:disabled": {
					backgroundColor: colors.grey[300],
					color: colors.grey[100],
					cursor: "not-allowed",
				},
			},
		},
	],
	primary: [
		baseButton,
		{
			backgroundColor: colors.orange[500],
			color: colors.base.white,
			":hover": {
				backgroundColor: colors.orange[600],
			},
			selectors: {
				'&[data-pressed="true"]': {
					backgroundColor: colors.orange[600],
					boxShadow: shadows["btn-pressed"],
				},
				"&:disabled": {
					backgroundColor: colors.orange[100],
					cursor: "not-allowed",
				},
			},
		},
	],
});

// Default export for backward compatibility
export const button = buttonVariants.default;

// Icon wrapper
export const iconWrapper = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "24px",
});

export const contentWrapper = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

import { style } from "@vanilla-extract/css";
import { colors, radius, shadows, textStyles } from "@/tokens";

export const floatingButton = style({
	...textStyles.heading4,
	paddingLeft: "20px",
	paddingRight: "14px",
	borderRadius: radius.xl,
	border: `none`,
	cursor: "pointer",
	display: "flex",
	gap: "4px",
	alignItems: "center",
	transition: "background-color 0.2s, box-shadow 0.2s",
	width: "auto",
	height: "40px",
	backgroundColor: colors.base.white,
	color: colors.grey[500],
	boxShadow: shadows.floating,
	":hover": {
		backgroundColor: colors.grey[50],
	},
	selectors: {
		'&[data-pressed="true"]': {
			backgroundColor: colors.grey[100],
			boxShadow: shadows.none,
		},
		"&:disabled": {
			backgroundColor: colors.grey[50],
			color: colors.grey[300],
			boxShadow: shadows.none,
			opacity: 0.6,
			cursor: "not-allowed",
		},
	},
});

export const contentWrapper = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

import { style } from "@vanilla-extract/css";
import { colors, radius } from "@/tokens";

const SWITCH_WIDTH = "38px";
const SWITCH_HEIGHT = "22px";
const THUMB_SIZE = "14px";
const THUMB_OFFSET = "4px";

export const switchButton = style({
	border: "none",
	background: "transparent",
	padding: 0,
	cursor: "pointer",
	outline: "none",
	selectors: {
		"&:focus-visible": {
			outline: `2px solid ${colors.orange[500]}`,
			outlineOffset: "2px",
			borderRadius: radius.full,
		},
	},
});

export const switchTrack = style({
	position: "relative",
	display: "inline-block",
	width: SWITCH_WIDTH,
	height: SWITCH_HEIGHT,
	borderRadius: radius.full,
	backgroundColor: colors.grey[100],
	transition: "background-color 0.2s",
	selectors: {
		[`${switchButton}[data-checked="true"] &`]: {
			backgroundColor: colors.orange[500],
		},
		[`${switchButton}:active[data-checked="false"] &`]: {
			backgroundColor: colors.grey[200],
		},
		[`${switchButton}:active[data-checked="true"] &`]: {
			backgroundColor: colors.orange[600],
		},
	},
});

export const switchThumb = style({
	position: "absolute",
	top: THUMB_OFFSET,
	left: THUMB_OFFSET,
	width: THUMB_SIZE,
	height: THUMB_SIZE,
	borderRadius: radius.full,
	backgroundColor: colors.base.white,
	transition: "transform 0.2s",
	transform: "translateX(0)",
	selectors: {
		[`${switchButton}[data-checked="true"] &`]: {
			transform: `translateX(calc(${SWITCH_WIDTH} - ${THUMB_SIZE} - ${THUMB_OFFSET} * 2))`,
		},
	},
});

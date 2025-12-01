import { style, styleVariants } from "@vanilla-extract/css";
import { colors, shadows, textStyles } from "@/tokens";

const CHIP_RADIUS_SELECTED = "14px";
const CHIP_RADIUS_UNSELECTED = "4px";

const baseChip = style({
	...textStyles.body2Medium,
	padding: "6px 12px",
	border: "1px solid transparent",
	cursor: "pointer",
	display: "inline-flex",
	alignItems: "center",
	gap: "4px",
	transition:
		"background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s",
	whiteSpace: "nowrap",
	userSelect: "none",
});

// Primary variant styles
const primaryFilled = styleVariants({
	default: [
		baseChip,
		{
			backgroundColor: colors.orange[500],
			color: colors.base.white,
			borderRadius: CHIP_RADIUS_UNSELECTED,
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
					color: colors.grey[300],
					cursor: "not-allowed",
				},
				'&[data-selected="true"]': {
					borderRadius: CHIP_RADIUS_SELECTED,
				},
			},
		},
	],
});

const primaryLight = styleVariants({
	default: [
		baseChip,
		{
			backgroundColor: colors.base.white,
			color: colors.orange[500],
			borderColor: colors.orange[500],
			borderRadius: CHIP_RADIUS_UNSELECTED,
			":hover": {
				backgroundColor: colors.orange[50],
			},
			selectors: {
				'&[data-pressed="true"]': {
					backgroundColor: colors.orange[50],
					borderColor: colors.orange[600],
					color: colors.orange[600],
				},
				"&:disabled": {
					backgroundColor: colors.base.white,
					borderColor: colors.grey[200],
					color: colors.grey[300],
					cursor: "not-allowed",
				},
				'&[data-selected="true"]': {
					borderRadius: CHIP_RADIUS_SELECTED,
				},
			},
		},
	],
});

// Secondary variant styles
const secondaryDefault = styleVariants({
	default: [
		baseChip,
		{
			backgroundColor: colors.base.white,
			color: colors.grey[500],
			borderColor: colors.grey[200],
			borderRadius: CHIP_RADIUS_UNSELECTED,
			":hover": {
				backgroundColor: colors.grey[50],
			},
			selectors: {
				'&[data-pressed="true"]': {
					backgroundColor: colors.grey[50],
					borderColor: colors.grey[300],
					color: colors.grey[600],
				},
				"&:disabled": {
					backgroundColor: colors.base.white,
					borderColor: colors.grey[200],
					color: colors.grey[300],
					cursor: "not-allowed",
				},
				'&[data-selected="true"]': {
					borderRadius: CHIP_RADIUS_SELECTED,
				},
			},
		},
	],
});

const secondaryFilled = styleVariants({
	default: [
		baseChip,
		{
			backgroundColor: colors.grey[800],
			color: colors.base.white,
			borderRadius: CHIP_RADIUS_UNSELECTED,
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
				'&[data-selected="true"]': {
					borderRadius: CHIP_RADIUS_SELECTED,
				},
			},
		},
	],
});

const secondaryLight = styleVariants({
	default: [
		baseChip,
		{
			backgroundColor: colors.base.white,
			color: colors.grey[500],
			borderColor: colors.grey[200],
			borderRadius: CHIP_RADIUS_UNSELECTED,
			":hover": {
				backgroundColor: colors.grey[50],
			},
			selectors: {
				'&[data-pressed="true"]': {
					backgroundColor: colors.grey[50],
					borderColor: colors.grey[300],
					color: colors.grey[600],
				},
				"&:disabled": {
					backgroundColor: colors.base.white,
					borderColor: colors.grey[200],
					color: colors.grey[300],
					cursor: "not-allowed",
				},
				'&[data-selected="true"]': {
					borderRadius: CHIP_RADIUS_SELECTED,
				},
			},
		},
	],
});

// Danger variant style
const dangerChip = styleVariants({
	default: [
		baseChip,
		{
			backgroundColor: colors.base.white,
			color: colors.red[500],
			borderColor: colors.grey[200],
			borderRadius: CHIP_RADIUS_UNSELECTED,
			":hover": {
				backgroundColor: colors.red[50],
			},
			selectors: {
				'&[data-pressed="true"]': {
					backgroundColor: colors.red[50],
					borderColor: colors.red[500],
				},
				"&:disabled": {
					backgroundColor: colors.base.white,
					borderColor: colors.grey[200],
					color: colors.grey[300],
					cursor: "not-allowed",
				},
				'&[data-selected="true"]': {
					borderRadius: CHIP_RADIUS_SELECTED,
				},
			},
		},
	],
});

// Safe variant style
const safeChip = styleVariants({
	default: [
		baseChip,
		{
			backgroundColor: colors.base.white,
			color: colors.green[500],
			borderColor: colors.grey[200],
			borderRadius: CHIP_RADIUS_UNSELECTED,
			":hover": {
				backgroundColor: colors.green[50],
			},
			selectors: {
				'&[data-pressed="true"]': {
					backgroundColor: colors.green[50],
					borderColor: colors.green[500],
				},
				"&:disabled": {
					backgroundColor: colors.base.white,
					borderColor: colors.grey[200],
					color: colors.grey[300],
					cursor: "not-allowed",
				},
				'&[data-selected="true"]': {
					borderRadius: CHIP_RADIUS_SELECTED,
				},
			},
		},
	],
});

// Combined variant map
export const chipVariants = {
	primary: {
		filled: primaryFilled.default,
		light: primaryLight.default,
	},
	secondary: {
		default: secondaryDefault.default,
		filled: secondaryFilled.default,
		light: secondaryLight.default,
	},
	danger: {
		default: dangerChip.default,
	},
	safe: {
		default: safeChip.default,
	},
} as const;

// Icon styles
export const iconWrapper = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
});

export const dotIcon = style({
	width: "4px",
	height: "4px",
	borderRadius: "50%",
	backgroundColor: "currentColor",
});

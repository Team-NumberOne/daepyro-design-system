import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "../../tokens/colors.css";
import { type TextStyleKey, textStyles } from "../../tokens/textStyles.css";

const meta = {
	title: "Design Tokens/Text Styles",
	parameters: {
		layout: "padded",
		docs: {
			description: {
				component:
					"디자인 시스템의 텍스트 스타일 토큰입니다. 타이포그래피 토큰을 조합하여 미리 정의된 텍스트 스타일을 제공합니다.",
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTextStyles: Story = {
	render: () => {
		const styleKeys: TextStyleKey[] = [
			"heading1",
			"heading2",
			"heading3",
			"heading4",
			"body1",
			"body2Bold",
			"body2Medium",
			"caption",
			"overline",
		];

		return (
			<div>
				<h3 style={{ marginBottom: "1rem" }}>Text Styles</h3>
				<div
					style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
				>
					{styleKeys.map((key) => {
						const style = textStyles[key];
						return (
							<div
								key={key}
								style={{
									padding: "1rem",
									backgroundColor: colors.grey[50],
									borderRadius: "8px",
									border: `1px solid ${colors.grey[200]}`,
								}}
							>
								<div
									style={{
										fontSize: "0.75rem",
										color: colors.grey[600],
										marginBottom: "0.5rem",
										fontFamily: "monospace",
									}}
								>
									{key}
								</div>
								<div
									style={{
										...style,
										color: colors.grey[900],
										marginBottom: "0.5rem",
									}}
								>
									The quick brown fox jumps over the lazy dog
								</div>
								<div
									style={{
										fontSize: "0.7rem",
										color: colors.grey[500],
										fontFamily: "monospace",
									}}
								>
									fontSize: {style.fontSize} | fontWeight: {style.fontWeight} |
									lineHeight: {style.lineHeight}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	},
};

export const Headings: Story = {
	render: () => {
		const headings: TextStyleKey[] = [
			"heading1",
			"heading2",
			"heading3",
			"heading4",
		];

		return (
			<div>
				<h3 style={{ marginBottom: "1rem" }}>Headings</h3>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					{headings.map((key) => {
						const style = textStyles[key];
						return (
							<div
								key={key}
								style={{
									...style,
									color: colors.grey[900],
								}}
							>
								{key.charAt(0).toUpperCase() +
									key.slice(1).replace(/([A-Z])/g, " $1")}
							</div>
						);
					})}
				</div>
			</div>
		);
	},
};

export const Body: Story = {
	render: () => {
		const bodyStyles: TextStyleKey[] = ["body1", "body2Bold", "body2Medium"];

		return (
			<div>
				<h3 style={{ marginBottom: "1rem" }}>Body Text</h3>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					{bodyStyles.map((key) => {
						const style = textStyles[key];
						return (
							<div
								key={key}
								style={{
									...style,
									color: colors.grey[900],
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris.
							</div>
						);
					})}
				</div>
			</div>
		);
	},
};

export const SmallText: Story = {
	render: () => {
		const smallStyles: TextStyleKey[] = ["caption", "overline"];

		return (
			<div>
				<h3 style={{ marginBottom: "1rem" }}>Small Text</h3>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					{smallStyles.map((key) => {
						const style = textStyles[key];
						return (
							<div
								key={key}
								style={{
									...style,
									color: colors.grey[700],
								}}
							>
								{key === "caption"
									? "This is a caption text"
									: "THIS IS AN OVERLINE TEXT"}
							</div>
						);
					})}
				</div>
			</div>
		);
	},
};

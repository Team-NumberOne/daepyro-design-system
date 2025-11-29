import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "@/tokens/colors";
import { typography } from "@/tokens/typography";

const meta = {
	title: "Design Tokens/Typography",
	parameters: {
		layout: "padded",
		docs: {
			description: {
				component:
					"디자인 시스템의 타이포그래피 토큰입니다. 폰트 패밀리, 크기, 굵기, 줄 간격, 자간을 포함합니다.",
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FontFamily: Story = {
	render: () => {
		return (
			<div>
				<h3 style={{ marginBottom: "1rem" }}>Font Family</h3>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<div>
						<div
							style={{
								fontSize: "0.875rem",
								color: colors.grey[400],
								marginBottom: "0.5rem",
							}}
						>
							Sans
						</div>
						<div
							style={{
								fontFamily: typography.fontFamily.sans,
								fontSize: "1.5rem",
								padding: "1rem",
								backgroundColor: colors.base.white,
								borderRadius: "8px",
							}}
						>
							The quick brown fox jumps over the lazy dog
						</div>
						<div
							style={{
								fontSize: "0.75rem",
								color: colors.grey[700],
								marginTop: "0.5rem",
								fontFamily: "monospace",
							}}
						>
							{typography.fontFamily.sans}
						</div>
					</div>
					<div>
						<div
							style={{
								fontSize: "0.875rem",
								color: colors.grey[600],
								marginBottom: "0.5rem",
							}}
						>
							Mono
						</div>
						<div
							style={{
								fontFamily: typography.fontFamily.mono,
								fontSize: "1.5rem",
								padding: "1rem",
								backgroundColor: colors.base.white,
								borderRadius: "8px",
							}}
						>
							The quick brown fox jumps over the lazy dog
						</div>
						<div
							style={{
								fontSize: "0.75rem",
								color: colors.grey[700],
								marginTop: "0.5rem",
								fontFamily: "monospace",
							}}
						>
							{typography.fontFamily.mono}
						</div>
					</div>
				</div>
			</div>
		);
	},
};

export const FontSize: Story = {
	render: () => {
		const sizes = Object.entries(typography.fontSize);

		return (
			<div>
				<h3 style={{ marginBottom: "1rem" }}>Font Size</h3>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					{sizes.map(([key, value]) => (
						<div
							key={key}
							style={{
								display: "flex",
								alignItems: "baseline",
								gap: "1rem",
								padding: "0.75rem",
								backgroundColor: colors.base.white,
								borderRadius: "8px",
							}}
						>
							<div
								style={{
									minWidth: "60px",
									fontSize: "0.875rem",
									fontWeight: 600,
									color: colors.grey[600],
								}}
							>
								{key}
							</div>
							<div
								style={{
									fontSize: value,
									fontFamily: typography.fontFamily.sans,
									flex: 1,
								}}
							>
								The quick brown fox
							</div>
							<div
								style={{
									fontSize: "0.75rem",
									color: colors.grey[700],
									fontFamily: "monospace",
								}}
							>
								{value}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	},
};

export const FontWeight: Story = {
	render: () => {
		const weights = Object.entries(typography.fontWeight);

		return (
			<div>
				<h3 style={{ marginBottom: "1rem" }}>Font Weight</h3>
				<div
					style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
				>
					{weights.map(([key, value]) => (
						<div
							key={key}
							style={{
								display: "flex",
								alignItems: "center",
								gap: "1rem",
								padding: "0.75rem",
								backgroundColor: colors.base.white,
								borderRadius: "8px",
							}}
						>
							<div
								style={{
									minWidth: "100px",
									fontSize: "0.875rem",
									color: colors.grey[600],
								}}
							>
								{key}
							</div>
							<div
								style={{
									fontSize: "1.25rem",
									fontWeight: value,
									fontFamily: typography.fontFamily.sans,
									flex: 1,
								}}
							>
								The quick brown fox
							</div>
							<div
								style={{
									fontSize: "0.75rem",
									color: colors.grey[700],
									fontFamily: "monospace",
								}}
							>
								{value}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	},
};

export const LineHeight: Story = {
	render: () => {
		const lineHeights = Object.entries(typography.lineHeight);

		return (
			<div>
				<h3 style={{ marginBottom: "1rem" }}>Line Height</h3>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					{lineHeights.map(([key, value]) => (
						<div key={key}>
							<div
								style={{
									fontSize: "0.875rem",
									color: colors.grey[600],
									marginBottom: "0.5rem",
								}}
							>
								{key} ({value})
							</div>
							<div
								style={{
									fontSize: "1rem",
									lineHeight: value,
									fontFamily: typography.fontFamily.sans,
									padding: "1rem",
									backgroundColor: colors.base.white,
									borderRadius: "8px",
									width: "300px",
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris.
							</div>
						</div>
					))}
				</div>
			</div>
		);
	},
};

export const LetterSpacing: Story = {
	render: () => {
		const letterSpacings = Object.entries(typography.letterSpacing);

		return (
			<div>
				<h3 style={{ marginBottom: "1rem" }}>Letter Spacing</h3>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					{letterSpacings.map(([key, value]) => (
						<div
							key={key}
							style={{
								display: "flex",
								alignItems: "center",
								gap: "1rem",
								padding: "0.75rem",
								backgroundColor: "#f5f5f5",
								borderRadius: "8px",
							}}
						>
							<div
								style={{
									minWidth: "100px",
									fontSize: "0.875rem",
									color: "#666",
								}}
							>
								{key}
							</div>
							<div
								style={{
									fontSize: "1.5rem",
									letterSpacing: value,
									fontFamily: typography.fontFamily.sans,
									flex: 1,
								}}
							>
								The quick brown fox
							</div>
							<div
								style={{
									fontSize: "0.75rem",
									color: "#999",
									fontFamily: "monospace",
								}}
							>
								{value}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	},
};

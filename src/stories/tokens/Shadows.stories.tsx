import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "../../tokens/colors";
import { type ShadowKey, shadows } from "../../tokens/shadows";

const meta = {
	title: "Design Tokens/Shadows",
	parameters: {
		layout: "padded",
		docs: {
			description: {
				component:
					"디자인 시스템의 그림자 토큰입니다. 다양한 깊이와 효과를 제공합니다.",
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllShadows: Story = {
	render: () => {
		const shadowKeys: ShadowKey[] = [
			"none",
			"btn-pressed",
			"floating",
			"dimmed",
		];

		return (
			<div>
				<h3 style={{ marginBottom: "1rem" }}>Shadows</h3>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
						gap: "2rem",
					}}
				>
					{shadowKeys.map((key) => (
						<div
							key={key}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "0.75rem",
							}}
						>
							<div
								style={{
									width: "150px",
									height: "150px",
									backgroundColor: colors.base.white,
									boxShadow: shadows[key],
									borderRadius: "8px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "0.875rem",
									color: colors.grey[700],
								}}
							>
								{key === "none" ? "No shadow" : "Shadow"}
							</div>
							<div
								style={{
									fontSize: "0.875rem",
									fontWeight: 600,
									color: colors.grey[700],
									textAlign: "center",
								}}
							>
								{key}
							</div>
							<div
								style={{
									fontSize: "0.7rem",
									color: colors.grey[400],
									fontFamily: "monospace",
									textAlign: "center",
									wordBreak: "break-all",
									maxWidth: "200px",
								}}
							>
								{shadows[key]}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	},
};

export const UsageExample: Story = {
	render: () => {
		return (
			<div>
				<h3 style={{ marginBottom: "1rem" }}>사용 예시</h3>
				<div
					style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
				>
					<div
						style={{
							padding: "1.5rem",
							backgroundColor: colors.base.white,
							borderRadius: "8px",
							boxShadow: shadows["btn-pressed"],
						}}
					>
						Button Pressed Shadow
					</div>
					<div
						style={{
							padding: "1.5rem",
							backgroundColor: colors.base.white,
							borderRadius: "8px",
							boxShadow: shadows.floating,
						}}
					>
						Floating Shadow (카드, 모달 등)
					</div>
					<div
						style={{
							padding: "1.5rem",
							backgroundColor: colors.base.white,
							borderRadius: "8px",
							boxShadow: shadows.dimmed,
						}}
					>
						Dimmed Shadow (드롭다운, 팝오버 등)
					</div>
				</div>
			</div>
		);
	},
};

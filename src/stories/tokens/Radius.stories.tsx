import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "../../tokens/colors";
import { type RadiusKey, radius } from "../../tokens/radius";

const meta = {
	title: "Design Tokens/Radius",
	parameters: {
		layout: "padded",
		docs: {
			description: {
				component:
					"디자인 시스템의 border-radius 토큰입니다. 일관된 둥근 모서리를 제공합니다.",
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllRadius: Story = {
	render: () => {
		const radiusKeys: RadiusKey[] = [
			"none",
			"sm",
			"base",
			"md",
			"lg",
			"xl",
			"full",
		];

		return (
			<div>
				<h3 style={{ marginBottom: "1rem" }}>Border Radius</h3>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
						gap: "1rem",
					}}
				>
					{radiusKeys.map((key) => (
						<div
							key={key}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "0.5rem",
							}}
						>
							<div
								style={{
									width: "100px",
									height: "100px",
									backgroundColor: colors.orange[500],
									borderRadius: radius[key],
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: colors.base.white,
									fontSize: "0.75rem",
									fontWeight: 600,
								}}
							>
								{key}
							</div>
							<div
								style={{
									fontSize: "0.875rem",
									fontWeight: 600,
									color: "#333",
								}}
							>
								{key}
							</div>
							<div
								style={{
									fontSize: "0.75rem",
									color: "#999",
									fontFamily: "monospace",
								}}
							>
								{radius[key]}
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
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<div
						style={{
							padding: "1rem",
							backgroundColor: colors.grey[50],
							borderRadius: radius.sm,
							border: `1px solid ${colors.grey[200]}`,
						}}
					>
						Small radius ({radius.sm})
					</div>
					<div
						style={{
							padding: "1rem",
							backgroundColor: colors.grey[50],
							borderRadius: radius.base,
							border: `1px solid ${colors.grey[200]}`,
						}}
					>
						Base radius ({radius.base})
					</div>
					<div
						style={{
							padding: "1rem",
							backgroundColor: colors.grey[50],
							borderRadius: radius.lg,
							border: `1px solid ${colors.grey[200]}`,
						}}
					>
						Large radius ({radius.lg})
					</div>
					<div
						style={{
							padding: "1rem",
							backgroundColor: colors.orange[500],
							color: colors.base.white,
							borderRadius: radius.full,
							textAlign: "center",
						}}
					>
						Full radius ({radius.full})
					</div>
				</div>
			</div>
		);
	},
};

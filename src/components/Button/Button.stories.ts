import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@testing-library/react";
import { Button } from "@/components/Button/Button";
import { getExpect, isTestEnvironment } from "../../../.storybook/utils";

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			control: "text",
			description: "버튼 내부에 표시될 내용",
		},
		variant: {
			control: "select",
			options: ["default", "gray", "primary"],
			description: "버튼의 스타일 변형",
		},
		disabled: {
			control: "boolean",
			description: "버튼 비활성화 여부",
		},
		onClick: {
			action: "clicked",
			description: "버튼 클릭 이벤트 핸들러",
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Button",
	},
	play: isTestEnvironment
		? async ({ canvasElement }) => {
				const expect = getExpect();
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button", { name: "Button" });

				await expect(button).toBeInTheDocument();
				await expect(button).not.toBeDisabled();
			}
		: undefined,
};

export const WithText: Story = {
	args: {
		children: "클릭하세요",
	},
	play: isTestEnvironment
		? async ({ canvasElement, args }) => {
				const expect = getExpect();
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button", { name: "클릭하세요" });

				await expect(button).toBeInTheDocument();
				await expect(button).toHaveTextContent(args.children as string);
			}
		: undefined,
};

export const Disabled: Story = {
	args: {
		children: "Disabled Button",
		disabled: true,
	},
	play: isTestEnvironment
		? async ({ canvasElement }) => {
				const expect = getExpect();
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button", {
					name: "Disabled Button",
				});

				await expect(button).toBeDisabled();
				await expect(button).toHaveAttribute("disabled");
			}
		: undefined,
};

export const LongText: Story = {
	args: {
		children: "이것은 매우 긴 텍스트를 가진 버튼입니다",
	},
	play: isTestEnvironment
		? async ({ canvasElement, args }) => {
				const expect = getExpect();
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button");

				await expect(button).toBeInTheDocument();
				await expect(button).toHaveTextContent(args.children as string);
			}
		: undefined,
};

export const VariantDefault: Story = {
	args: {
		children: "Default Button",
		variant: "default",
	},
	play: isTestEnvironment
		? async ({ canvasElement }) => {
				const expect = getExpect();
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button", { name: "Default Button" });

				await expect(button).toBeInTheDocument();
				await expect(button).toHaveAttribute("data-variant", "default");
			}
		: undefined,
};

export const VariantGray: Story = {
	args: {
		children: "Gray Button",
		variant: "gray",
	},
	play: isTestEnvironment
		? async ({ canvasElement }) => {
				const expect = getExpect();
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button", { name: "Gray Button" });

				await expect(button).toBeInTheDocument();
				await expect(button).toHaveAttribute("data-variant", "gray");
			}
		: undefined,
};

export const VariantPrimary: Story = {
	args: {
		children: "Primary Button",
		variant: "primary",
	},
	play: isTestEnvironment
		? async ({ canvasElement }) => {
				const expect = getExpect();
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button", { name: "Primary Button" });

				await expect(button).toBeInTheDocument();
				await expect(button).toHaveAttribute("data-variant", "primary");
			}
		: undefined,
};

export const WithIcon: Story = {
	args: {
		children: "알림",
		variant: "primary",
		icon: "🔔",
		style: { width: "300px" },
	},
	play: isTestEnvironment
		? async ({ canvasElement }) => {
				const expect = getExpect();
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button", { name: "🔔 알림" });

				await expect(button).toBeInTheDocument();
				await expect(button).toHaveTextContent("🔔");
				await expect(button).toHaveTextContent("알림");
			}
		: undefined,
};

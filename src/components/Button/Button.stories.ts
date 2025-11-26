import type { Meta, StoryObj } from "@storybook/react";
import { isTestEnvironment } from "@storybook/utils";
import { within } from "@testing-library/react";
import { expect } from "vitest";
import { Button } from "./Button";

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
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button", { name: "Button" });

				// 버튼이 렌더링되었는지 확인
				await expect(button).toBeInTheDocument();
				// 버튼이 활성화되어 있는지 확인
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
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button", {
					name: "Disabled Button",
				});

				// 비활성화 상태 확인
				await expect(button).toBeDisabled();
				// aria-disabled 속성 확인
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
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button");

				await expect(button).toBeInTheDocument();
				await expect(button).toHaveTextContent(args.children as string);
			}
		: undefined,
};

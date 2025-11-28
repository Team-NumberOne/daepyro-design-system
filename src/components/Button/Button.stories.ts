import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@testing-library/react";
import { Button } from "@/components/Button/Button";
import { getExpect, isTestEnvironment } from "../../../.storybook/utils";

// vitest.config.ts에서 globals: true로 설정되어 있으므로 전역 expect 사용 가능
// @testing-library/jest-dom/vitest는 vitest.setup.ts에서 import됨
// isTestEnvironment가 true일 때만 expect를 사용하므로 안전합니다

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
				const expect = getExpect();
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
				const expect = getExpect();
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button");

				await expect(button).toBeInTheDocument();
				await expect(button).toHaveTextContent(args.children as string);
			}
		: undefined,
};

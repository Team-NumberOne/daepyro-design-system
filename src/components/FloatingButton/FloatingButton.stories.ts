import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@testing-library/react";
import { getExpect, isTestEnvironment } from "../../../.storybook/utils";
import { FloatingButton } from "./FloatingButton";

const meta = {
	title: "Components/FloatingButton",
	component: FloatingButton,
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
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Text",
	},
	play: isTestEnvironment
		? async ({ canvasElement }) => {
				const expect = getExpect();
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button", { name: "Text +" });

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
				const button = canvas.getByRole("button", { name: "클릭하세요 +" });

				await expect(button).toBeInTheDocument();
				await expect(button).toHaveTextContent(args.children as string);
			}
		: undefined,
};

export const Disabled: Story = {
	args: {
		children: "Text",
		disabled: true,
	},
	play: isTestEnvironment
		? async ({ canvasElement }) => {
				const expect = getExpect();
				const canvas = within(canvasElement);
				const button = canvas.getByRole("button", {
					name: "Text +",
				});

				await expect(button).toBeDisabled();
				await expect(button).toHaveAttribute("disabled");
			}
		: undefined,
};

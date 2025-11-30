import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@testing-library/react";
import { Switch } from "@/components/Switch/Switch";
import { getExpect, isTestEnvironment } from "../../../.storybook/utils";

const meta = {
	title: "Components/Switch",
	component: Switch,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		checked: {
			control: "boolean",
			description: "Switch의 켜짐/꺼짐 상태",
		},
		onChange: {
			action: "changed",
			description: "Switch 상태 변경 이벤트 핸들러",
		},
	},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		checked: false,
	},
	play: isTestEnvironment
		? async ({ canvasElement }) => {
				const expect = getExpect();
				const canvas = within(canvasElement);
				const switchElement = canvas.getByRole("switch");

				await expect(switchElement).toBeInTheDocument();
				await expect(switchElement).toHaveAttribute("aria-checked", "false");
			}
		: undefined,
};

export const Checked: Story = {
	args: {
		checked: true,
	},
	play: isTestEnvironment
		? async ({ canvasElement }) => {
				const expect = getExpect();
				const canvas = within(canvasElement);
				const switchElement = canvas.getByRole("switch");

				await expect(switchElement).toBeInTheDocument();
				await expect(switchElement).toHaveAttribute("aria-checked", "true");
			}
		: undefined,
};

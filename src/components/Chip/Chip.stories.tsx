import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@testing-library/react";
import { getExpect, isTestEnvironment } from "../../../.storybook/utils";
import { Chip } from "./Chip";

const meta = {
	title: "Components/Chip",
	component: Chip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			control: "text",
			description: "Chip 내부에 표시될 텍스트",
		},
		variant: {
			control: "select",
			options: ["primary", "secondary", "danger", "safe"],
			description: "Chip의 스타일 변형",
		},
		chipStyle: {
			control: "select",
			options: ["default", "filled", "light"],
			description: "Chip의 스타일",
		},
		icon: {
			control: "select",
			options: ["none", "dot", "close", "arrow-right"],
			description: "Chip에 표시할 아이콘",
		},
		iconPosition: {
			control: "select",
			options: ["left", "right"],
			description: "아이콘 위치",
		},
		selected: {
			control: "boolean",
			description: "선택된 상태 (탭 버튼인 경우)",
		},
		disabled: {
			control: "boolean",
			description: "Chip 비활성화 여부",
		},
		onClick: {
			action: "clicked",
			description: "Chip 클릭 이벤트 핸들러",
		},
	},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "default",
	},
	play: isTestEnvironment
		? async ({ canvasElement }) => {
				const expect = getExpect();
				const canvas = within(canvasElement);
				const chip = canvas.getByRole("button", { name: "Text" });

				await expect(chip).toBeInTheDocument();
				await expect(chip).not.toBeDisabled();
			}
		: undefined,
};

// Primary Section
export const PrimaryFilledDefault: Story = {
	args: {
		children: "Text",
		variant: "primary",
		chipStyle: "filled",
	},
};

export const PrimaryFilledWithClose: Story = {
	args: {
		children: "Text",
		variant: "primary",
		chipStyle: "filled",
		icon: "close",
	},
};

export const PrimaryFilledPressed: Story = {
	args: {
		children: "Text",
		variant: "primary",
		chipStyle: "filled",
	},
	render: (args) => (
		<div style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
			<Chip {...args} />
			<Chip {...args} style={{ pointerEvents: "none" }} />
		</div>
	),
};

export const PrimaryFilledDisabled: Story = {
	args: {
		children: "Text",
		variant: "primary",
		chipStyle: "filled",
		disabled: true,
	},
};

export const PrimaryLightDefault: Story = {
	args: {
		children: "Text",
		variant: "primary",
		chipStyle: "light",
	},
};

export const PrimaryLightWithDot: Story = {
	args: {
		children: "Text",
		variant: "primary",
		chipStyle: "light",
		icon: "dot",
	},
};

export const PrimaryLightPressed: Story = {
	args: {
		children: "Text",
		variant: "primary",
		chipStyle: "light",
	},
	render: (args) => (
		<div style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
			<Chip {...args} />
			<Chip {...args} style={{ pointerEvents: "none" }} />
		</div>
	),
};

export const PrimaryLightDisabled: Story = {
	args: {
		children: "Text",
		variant: "primary",
		chipStyle: "light",
		disabled: true,
	},
};

// Secondary Section
export const SecondaryDefault: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "default",
	},
};

export const SecondaryDefaultWithDot: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "default",
		icon: "dot",
	},
};

export const SecondaryDefaultWithArrow: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "default",
		icon: "arrow-right",
	},
};

export const SecondaryDefaultPressed: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "default",
	},
	render: (args) => (
		<div style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
			<Chip {...args} />
			<Chip {...args} style={{ pointerEvents: "none" }} />
		</div>
	),
};

export const SecondaryDefaultDisabled: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "default",
		disabled: true,
	},
};

export const SecondaryFilled: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "filled",
	},
};

export const SecondaryFilledWithDot: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "filled",
		icon: "dot",
	},
};

export const SecondaryFilledWithArrow: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "filled",
		icon: "arrow-right",
	},
};

export const SecondaryFilledPressed: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "filled",
	},
	render: (args) => (
		<div style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
			<Chip {...args} />
			<Chip {...args} style={{ pointerEvents: "none" }} />
		</div>
	),
};

export const SecondaryFilledDisabled: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "filled",
		disabled: true,
	},
};

export const SecondaryLight: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "light",
	},
};

export const SecondaryLightWithDot: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "light",
		icon: "dot",
	},
};

export const SecondaryLightWithArrow: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "light",
		icon: "arrow-right",
	},
};

export const SecondaryLightPressed: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "light",
	},
	render: (args) => (
		<div style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
			<Chip {...args} />
			<Chip {...args} style={{ pointerEvents: "none" }} />
		</div>
	),
};

export const SecondaryLightDisabled: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "light",
		disabled: true,
	},
};

// Danger and Safe
export const Danger: Story = {
	args: {
		children: "Text",
		variant: "danger",
		icon: "dot",
	},
};

export const Safe: Story = {
	args: {
		children: "Text",
		variant: "safe",
		icon: "dot",
	},
};

// Selected state (Tab button)
export const Selected: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "default",
		selected: true,
	},
};

export const NotSelected: Story = {
	args: {
		children: "Text",
		variant: "secondary",
		chipStyle: "default",
		selected: false,
	},
	render: (args) => (
		<div style={{ display: "flex", gap: "8px" }}>
			<Chip {...args} selected={false} />
			<Chip {...args} selected={true} />
		</div>
	),
};

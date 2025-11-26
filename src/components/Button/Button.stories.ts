import type { Meta, StoryObj } from "@storybook/react";
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
};

export const WithText: Story = {
  args: {
    children: "클릭하세요",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    children: "이것은 매우 긴 텍스트를 가진 버튼입니다",
  },
};

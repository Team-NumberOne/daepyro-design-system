import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

// vanilla-extract CSS 파일 모킹
vi.mock("./Button.css", () => ({
	button: "mock-button-class",
}));

describe("Button", () => {
	afterEach(() => {
		cleanup();
	});

	it("렌더링되어야 합니다", () => {
		render(<Button>클릭하세요</Button>);
		const button = screen.getByRole("button", { name: "클릭하세요" });
		expect(button).toBeInTheDocument();
	});

	it("children을 표시해야 합니다", () => {
		render(<Button>테스트 버튼</Button>);
		expect(screen.getByText("테스트 버튼")).toBeInTheDocument();
	});

	it("disabled 상태일 때 비활성화되어야 합니다", () => {
		render(<Button disabled>비활성화 버튼</Button>);
		const button = screen.getByRole("button", { name: "비활성화 버튼" });
		expect(button).toBeDisabled();
	});

	it("disabled 상태가 아닐 때 활성화되어야 합니다", () => {
		render(<Button>활성화 버튼</Button>);
		const button = screen.getByRole("button", { name: "활성화 버튼" });
		expect(button).not.toBeDisabled();
	});

	it("onClick 핸들러가 호출되어야 합니다", async () => {
		const handleClick = vi.fn();
		const user = userEvent.setup();

		render(<Button onClick={handleClick}>클릭 테스트</Button>);
		const button = screen.getByRole("button", { name: "클릭 테스트" });

		await user.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("disabled 상태일 때 onClick이 호출되지 않아야 합니다", async () => {
		const handleClick = vi.fn();
		const user = userEvent.setup();

		render(
			<Button disabled onClick={handleClick}>
				비활성화 클릭 테스트
			</Button>,
		);
		const button = screen.getByRole("button", {
			name: "비활성화 클릭 테스트",
		});

		await user.click(button);
		expect(handleClick).not.toHaveBeenCalled();
	});

	it("HTML 속성을 전달받아야 합니다", () => {
		render(
			<Button type="submit" aria-label="제출 버튼">
				제출
			</Button>,
		);
		const button = screen.getByRole("button", { name: "제출 버튼" });
		expect(button).toHaveAttribute("type", "submit");
		expect(button).toHaveAttribute("aria-label", "제출 버튼");
	});

	it("className이 적용되어야 합니다", () => {
		render(<Button className="custom-class">커스텀 클래스</Button>);
		const button = screen.getByRole("button", { name: "커스텀 클래스" });
		expect(button).toHaveClass("custom-class");
	});

	it("기본 button 요소로 렌더링되어야 합니다", () => {
		render(<Button>버튼</Button>);
		const button = screen.getByRole("button", { name: "버튼" });
		expect(button.tagName).toBe("BUTTON");
	});
});

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

// vanilla-extract CSS 파일 모킹
vi.mock("./Button.css", () => ({
	buttonVariants: {
		default: "mock-button-default",
		gray: "mock-button-gray",
		primary: "mock-button-primary",
	},
	iconWrapper: "mock-icon-wrapper",
	contentWrapper: "mock-content-wrapper",
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

	it("variant prop이 적용되어야 합니다", () => {
		const { rerender } = render(<Button variant="default">버튼</Button>);
		let button = screen.getByRole("button", { name: "버튼" });
		expect(button).toHaveAttribute("data-variant", "default");

		rerender(<Button variant="gray">버튼</Button>);
		button = screen.getByRole("button", { name: "버튼" });
		expect(button).toHaveAttribute("data-variant", "gray");

		rerender(<Button variant="primary">버튼</Button>);
		button = screen.getByRole("button", { name: "버튼" });
		expect(button).toHaveAttribute("data-variant", "primary");
	});

	it("기본 variant는 default여야 합니다", () => {
		render(<Button>버튼</Button>);
		const button = screen.getByRole("button", { name: "버튼" });
		expect(button).toHaveAttribute("data-variant", "default");
	});

	it("icon이 있을 때 렌더링되어야 합니다", () => {
		const Icon = () => <span>🔔</span>;
		const { container } = render(
			<Button icon={<Icon />} variant="primary">
				알림
			</Button>,
		);
		const iconElement = screen.getByText("🔔");
		expect(iconElement).toBeInTheDocument();
		const iconWrapper = container.querySelector("[data-icon]");
		expect(iconWrapper).toBeInTheDocument();
		expect(iconWrapper).toContainElement(iconElement);
	});

	it("icon이 없어도 아이콘 span은 렌더링되어야 합니다", () => {
		const { container } = render(<Button>버튼</Button>);
		const iconElement = container.querySelector("[data-icon]");
		expect(iconElement).toBeInTheDocument();
		expect(iconElement?.textContent).toBe("");
	});

	it("children이 없어도 contentWrapper span은 렌더링되어야 합니다", () => {
		const { container } = render(<Button />);
		const button = container.querySelector("button");
		// 버튼 내부에 2개의 span이 있어야 함 (icon span, content span)
		const spans = button?.querySelectorAll("span");
		expect(spans?.length).toBe(2);
	});

	it("grid 레이아웃 구조를 가져야 합니다", () => {
		const { container } = render(<Button icon="🔔">버튼</Button>);
		const button = container.querySelector("button");
		// 버튼 내부에 2개의 span이 있어야 함 (icon span, content span)
		const spans = button?.querySelectorAll("span");
		expect(spans?.length).toBe(2);

		// 첫 번째 span은 아이콘
		const iconSpan = container.querySelector("[data-icon]");
		expect(iconSpan).toBeInTheDocument();
		expect(iconSpan?.textContent).toBe("🔔");

		// 두 번째 span은 children
		expect(screen.getByText("버튼")).toBeInTheDocument();
	});

	it("icon과 children이 모두 있을 때 올바르게 렌더링되어야 합니다", () => {
		const Icon = () => <span>🔔</span>;
		render(
			<Button icon={<Icon />} variant="primary">
				알림 버튼
			</Button>,
		);

		// 아이콘이 렌더링되어야 함
		expect(screen.getByText("🔔")).toBeInTheDocument();

		// children이 렌더링되어야 함
		expect(screen.getByText("알림 버튼")).toBeInTheDocument();

		// 버튼이 올바르게 렌더링되어야 함 (아이콘이 포함된 이름으로 검색)
		const button = screen.getByRole("button", { name: /알림 버튼/ });
		expect(button).toBeInTheDocument();
	});

	it("마우스 다운 시 pressed 상태가 되어야 합니다", async () => {
		const user = userEvent.setup();
		render(<Button>버튼</Button>);
		const button = screen.getByRole("button", { name: "버튼" });

		await user.pointer({ keys: "[MouseLeft>]", target: button });
		expect(button).toHaveAttribute("data-pressed", "true");
	});

	it("마우스 업 시 pressed 상태가 해제되어야 합니다", async () => {
		const user = userEvent.setup();
		render(<Button>버튼</Button>);
		const button = screen.getByRole("button", { name: "버튼" });

		await user.pointer({ keys: "[MouseLeft>]", target: button });
		expect(button).toHaveAttribute("data-pressed", "true");

		await user.pointer({ keys: "[/MouseLeft]" });
		expect(button).toHaveAttribute("data-pressed", "false");
	});

	it("마우스가 벗어날 때 pressed 상태가 해제되어야 합니다", async () => {
		const user = userEvent.setup();
		render(<Button>버튼</Button>);
		const button = screen.getByRole("button", { name: "버튼" });

		await user.pointer({ keys: "[MouseLeft>]", target: button });
		expect(button).toHaveAttribute("data-pressed", "true");

		await user.hover(button);
		await user.unhover(button);
		expect(button).toHaveAttribute("data-pressed", "false");
	});

	it("disabled 상태일 때 마우스 다운해도 pressed 상태가 되지 않아야 합니다", async () => {
		const user = userEvent.setup();
		render(<Button disabled>버튼</Button>);
		const button = screen.getByRole("button", { name: "버튼" });

		await user.pointer({ keys: "[MouseLeft>]", target: button });
		expect(button).toHaveAttribute("data-pressed", "false");
	});

	it("ref가 전달되어야 합니다", () => {
		const TestComponent = () => {
			const buttonRef = useRef<HTMLButtonElement>(null);

			return (
				<>
					<Button ref={buttonRef}>버튼</Button>
					<div data-testid="ref-check">
						{buttonRef.current ? "ref-set" : "ref-not-set"}
					</div>
				</>
			);
		};

		const { rerender } = render(<TestComponent />);
		// ref는 렌더링 후에 설정되므로 rerender를 통해 확인
		rerender(<TestComponent />);
		expect(screen.getByTestId("ref-check")).toHaveTextContent("ref-set");
	});

	it("기본 type은 button이어야 합니다", () => {
		render(<Button>버튼</Button>);
		const button = screen.getByRole("button", { name: "버튼" });
		expect(button).toHaveAttribute("type", "button");
	});

	it("type prop이 submit일 때 적용되어야 합니다", () => {
		render(<Button type="submit">제출</Button>);
		const button = screen.getByRole("button", { name: "제출" });
		expect(button).toHaveAttribute("type", "submit");
	});

	it("type prop이 reset일 때 적용되어야 합니다", () => {
		render(<Button type="reset">리셋</Button>);
		const button = screen.getByRole("button", { name: "리셋" });
		expect(button).toHaveAttribute("type", "reset");
	});

	it("onMouseDown 핸들러가 호출되어야 합니다", async () => {
		const handleMouseDown = vi.fn();
		const user = userEvent.setup();
		render(<Button onMouseDown={handleMouseDown}>버튼</Button>);
		const button = screen.getByRole("button", { name: "버튼" });

		await user.pointer({ keys: "[MouseLeft>]", target: button });
		expect(handleMouseDown).toHaveBeenCalledTimes(1);
	});

	it("onMouseUp 핸들러가 호출되어야 합니다", async () => {
		const handleMouseUp = vi.fn();
		const user = userEvent.setup();
		render(<Button onMouseUp={handleMouseUp}>버튼</Button>);
		const button = screen.getByRole("button", { name: "버튼" });

		await user.pointer({ keys: "[MouseLeft>]", target: button });
		await user.pointer({ keys: "[/MouseLeft]" });
		expect(handleMouseUp).toHaveBeenCalledTimes(1);
	});

	it("onMouseLeave 핸들러가 호출되어야 합니다", async () => {
		const handleMouseLeave = vi.fn();
		const user = userEvent.setup();
		render(<Button onMouseLeave={handleMouseLeave}>버튼</Button>);
		const button = screen.getByRole("button", { name: "버튼" });

		await user.hover(button);
		await user.unhover(button);
		expect(handleMouseLeave).toHaveBeenCalledTimes(1);
	});

	it("disabled 상태일 때 onMouseDown이 호출되지 않아야 합니다", async () => {
		const handleMouseDown = vi.fn();
		const user = userEvent.setup();
		render(
			<Button disabled onMouseDown={handleMouseDown}>
				버튼
			</Button>,
		);
		const button = screen.getByRole("button", { name: "버튼" });

		await user.pointer({ keys: "[MouseLeft>]", target: button });
		expect(handleMouseDown).not.toHaveBeenCalled();
	});

	it("Enter 키로 버튼을 활성화할 수 있어야 합니다", async () => {
		const handleClick = vi.fn();
		const user = userEvent.setup();
		render(<Button onClick={handleClick}>버튼</Button>);
		const button = screen.getByRole("button", { name: "버튼" });

		button.focus();
		await user.keyboard("{Enter}");
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("Space 키로 버튼을 활성화할 수 있어야 합니다", async () => {
		const handleClick = vi.fn();
		const user = userEvent.setup();
		render(<Button onClick={handleClick}>버튼</Button>);
		const button = screen.getByRole("button", { name: "버튼" });

		button.focus();
		await user.keyboard(" ");
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("disabled 상태일 때 키보드로 활성화할 수 없어야 합니다", async () => {
		const handleClick = vi.fn();
		const user = userEvent.setup();
		render(
			<Button disabled onClick={handleClick}>
				버튼
			</Button>,
		);
		const button = screen.getByRole("button", { name: "버튼" });

		button.focus();
		await user.keyboard("{Enter}");
		expect(handleClick).not.toHaveBeenCalled();
	});

	it("variant className과 custom className이 함께 적용되어야 합니다", () => {
		render(<Button className="custom-class">버튼</Button>);
		const button = screen.getByRole("button", { name: "버튼" });
		expect(button).toHaveClass("mock-button-default");
		expect(button).toHaveClass("custom-class");
	});

	it("displayName이 설정되어야 합니다", () => {
		expect(Button.displayName).toBe("Button");
	});

	it("여러 개의 버튼이 독립적으로 동작해야 합니다", async () => {
		const handleClick1 = vi.fn();
		const handleClick2 = vi.fn();
		const user = userEvent.setup();

		render(
			<>
				<Button onClick={handleClick1}>버튼 1</Button>
				<Button onClick={handleClick2}>버튼 2</Button>
			</>,
		);

		const button1 = screen.getByRole("button", { name: "버튼 1" });
		const button2 = screen.getByRole("button", { name: "버튼 2" });

		await user.click(button1);
		expect(handleClick1).toHaveBeenCalledTimes(1);
		expect(handleClick2).not.toHaveBeenCalled();

		await user.click(button2);
		expect(handleClick1).toHaveBeenCalledTimes(1);
		expect(handleClick2).toHaveBeenCalledTimes(1);
	});

	it("빈 children일 때도 정상적으로 렌더링되어야 합니다", () => {
		render(<Button>{""}</Button>);
		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
	});

	it("복잡한 ReactNode children을 렌더링할 수 있어야 합니다", () => {
		render(
			<Button>
				<span>텍스트</span>
				<strong>강조</strong>
			</Button>,
		);
		expect(screen.getByText("텍스트")).toBeInTheDocument();
		expect(screen.getByText("강조")).toBeInTheDocument();
	});
});

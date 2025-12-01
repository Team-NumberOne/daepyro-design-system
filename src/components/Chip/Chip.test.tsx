import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Chip } from "./Chip";

// vanilla-extract CSS 파일 모킹
vi.mock("./Chip.css", () => ({
	chipVariants: {
		primary: {
			filled: "mock-chip-primary-filled",
			light: "mock-chip-primary-light",
		},
		secondary: {
			default: "mock-chip-secondary-default",
			filled: "mock-chip-secondary-filled",
			light: "mock-chip-secondary-light",
		},
		danger: {
			default: "mock-chip-danger-default",
		},
		safe: {
			default: "mock-chip-safe-default",
		},
	},
	iconWrapper: "mock-icon-wrapper",
	dotIcon: "mock-dot-icon",
}));

// 아이콘 컴포넌트 모킹
vi.mock("@/icons/Close", () => ({
	Close: ({
		"aria-label": ariaLabel,
		...props
	}: {
		"aria-label"?: string;
		[key: string]: unknown;
	}) => <svg data-testid="close-icon" aria-label={ariaLabel} {...props} />,
}));

vi.mock("@/icons/ArrowRight", () => ({
	ArrowRight: ({
		"aria-label": ariaLabel,
		...props
	}: {
		"aria-label"?: string;
		[key: string]: unknown;
	}) => (
		<svg data-testid="arrow-right-icon" aria-label={ariaLabel} {...props} />
	),
}));

describe("Chip", () => {
	afterEach(() => {
		cleanup();
	});

	it("렌더링되어야 합니다", () => {
		render(<Chip>Text</Chip>);
		const chip = screen.getByRole("button", { name: "Text" });
		expect(chip).toBeInTheDocument();
	});

	it("children을 표시해야 합니다", () => {
		render(<Chip>테스트 Chip</Chip>);
		expect(screen.getByText("테스트 Chip")).toBeInTheDocument();
	});

	it("disabled 상태일 때 비활성화되어야 합니다", () => {
		render(<Chip disabled>비활성화 Chip</Chip>);
		const chip = screen.getByRole("button", { name: "비활성화 Chip" });
		expect(chip).toBeDisabled();
	});

	it("disabled 상태가 아닐 때 활성화되어야 합니다", () => {
		render(<Chip>활성화 Chip</Chip>);
		const chip = screen.getByRole("button", { name: "활성화 Chip" });
		expect(chip).not.toBeDisabled();
	});

	it("onClick 핸들러가 호출되어야 합니다", async () => {
		const handleClick = vi.fn();
		const user = userEvent.setup();

		render(<Chip onClick={handleClick}>클릭 테스트</Chip>);
		const chip = screen.getByRole("button", { name: "클릭 테스트" });

		await user.click(chip);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("disabled 상태일 때 onClick이 호출되지 않아야 합니다", async () => {
		const handleClick = vi.fn();
		const user = userEvent.setup();

		render(
			<Chip disabled onClick={handleClick}>
				비활성화 클릭 테스트
			</Chip>,
		);
		const chip = screen.getByRole("button", {
			name: "비활성화 클릭 테스트",
		});

		await user.click(chip);
		expect(handleClick).not.toHaveBeenCalled();
	});

	it("HTML 속성을 전달받아야 합니다", () => {
		render(
			<Chip type="submit" aria-label="제출 Chip">
				제출
			</Chip>,
		);
		const chip = screen.getByRole("button", { name: "제출 Chip" });
		expect(chip).toHaveAttribute("type", "submit");
		expect(chip).toHaveAttribute("aria-label", "제출 Chip");
	});

	it("className이 적용되어야 합니다", () => {
		render(<Chip className="custom-class">커스텀 클래스</Chip>);
		const chip = screen.getByRole("button", { name: "커스텀 클래스" });
		expect(chip).toHaveClass("custom-class");
	});

	it("기본 button 요소로 렌더링되어야 합니다", () => {
		render(<Chip>Chip</Chip>);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(chip.tagName).toBe("BUTTON");
	});

	it("variant prop이 적용되어야 합니다", () => {
		const { rerender } = render(<Chip variant="secondary">Chip</Chip>);
		let chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveAttribute("data-variant", "secondary");

		rerender(<Chip variant="primary">Chip</Chip>);
		chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveAttribute("data-variant", "primary");

		rerender(<Chip variant="danger">Chip</Chip>);
		chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveAttribute("data-variant", "danger");

		rerender(<Chip variant="safe">Chip</Chip>);
		chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveAttribute("data-variant", "safe");
	});

	it("기본 variant는 secondary여야 합니다", () => {
		render(<Chip>Chip</Chip>);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveAttribute("data-variant", "secondary");
	});

	it("chipStyle prop이 적용되어야 합니다", () => {
		const { rerender } = render(
			<Chip variant="secondary" chipStyle="default">
				Chip
			</Chip>,
		);
		let chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveAttribute("data-chip-style", "default");

		rerender(
			<Chip variant="secondary" chipStyle="filled">
				Chip
			</Chip>,
		);
		chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveAttribute("data-chip-style", "filled");

		rerender(
			<Chip variant="secondary" chipStyle="light">
				Chip
			</Chip>,
		);
		chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveAttribute("data-chip-style", "light");
	});

	it("기본 style은 default여야 합니다", () => {
		render(<Chip variant="secondary">Chip</Chip>);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveAttribute("data-chip-style", "default");
	});

	it("selected prop이 적용되어야 합니다", () => {
		const { rerender } = render(<Chip selected={false}>Chip</Chip>);
		let chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveAttribute("data-selected", "false");

		rerender(<Chip selected={true}>Chip</Chip>);
		chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveAttribute("data-selected", "true");
	});

	it("기본 selected는 false여야 합니다", () => {
		render(<Chip>Chip</Chip>);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveAttribute("data-selected", "false");
	});

	it("icon이 none일 때 아이콘이 렌더링되지 않아야 합니다", () => {
		render(<Chip icon="none">Chip</Chip>);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(screen.queryByTestId("close-icon")).not.toBeInTheDocument();
		expect(screen.queryByTestId("arrow-right-icon")).not.toBeInTheDocument();
		expect(chip.querySelector(".mock-dot-icon")).not.toBeInTheDocument();
	});

	it("icon이 dot일 때 dot 아이콘이 렌더링되어야 합니다", () => {
		const { container } = render(<Chip icon="dot">Chip</Chip>);
		const dot = container.querySelector(".mock-dot-icon");
		expect(dot).toBeInTheDocument();
	});

	it("icon이 close일 때 Close 아이콘이 렌더링되어야 합니다", () => {
		render(<Chip icon="close">Chip</Chip>);
		expect(screen.getByTestId("close-icon")).toBeInTheDocument();
	});

	it("icon이 arrow-right일 때 ArrowRight 아이콘이 렌더링되어야 합니다", () => {
		render(<Chip icon="arrow-right">Chip</Chip>);
		expect(screen.getByTestId("arrow-right-icon")).toBeInTheDocument();
	});

	it("iconPosition이 left일 때 아이콘이 왼쪽에 렌더링되어야 합니다", () => {
		const { container } = render(
			<Chip icon="dot" iconPosition="left">
				Chip
			</Chip>,
		);
		const chip = container.querySelector("button");
		const iconWrappers = chip?.querySelectorAll(".mock-icon-wrapper");
		expect(iconWrappers?.length).toBe(1);
		expect(iconWrappers?.[0].nextSibling?.textContent).toBe("Chip");
	});

	it("iconPosition이 right일 때 아이콘이 오른쪽에 렌더링되어야 합니다", () => {
		const { container } = render(
			<Chip icon="arrow-right" iconPosition="right">
				Chip
			</Chip>,
		);
		const chip = container.querySelector("button");
		const iconWrappers = chip?.querySelectorAll(".mock-icon-wrapper");
		expect(iconWrappers?.length).toBe(1);
		expect(chip?.firstChild?.textContent).toBe("Chip");
	});

	it("icon이 arrow-right일 때 기본 iconPosition은 right여야 합니다", () => {
		const { container } = render(<Chip icon="arrow-right">Chip</Chip>);
		const chip = container.querySelector("button");
		const iconWrappers = chip?.querySelectorAll(".mock-icon-wrapper");
		expect(iconWrappers?.length).toBe(1);
		expect(chip?.firstChild?.textContent).toBe("Chip");
	});

	it("icon이 dot이나 close일 때 기본 iconPosition은 left여야 합니다", () => {
		const { container } = render(<Chip icon="dot">Chip</Chip>);
		const chip = container.querySelector("button");
		const iconWrappers = chip?.querySelectorAll(".mock-icon-wrapper");
		expect(iconWrappers?.length).toBe(1);
		expect(iconWrappers?.[0].nextSibling?.textContent).toBe("Chip");
	});

	it("마우스 다운 시 pressed 상태가 되어야 합니다", async () => {
		const user = userEvent.setup();
		render(<Chip>Chip</Chip>);
		const chip = screen.getByRole("button", { name: "Chip" });

		await user.pointer({ keys: "[MouseLeft>]", target: chip });
		expect(chip).toHaveAttribute("data-pressed", "true");
	});

	it("마우스 업 시 pressed 상태가 해제되어야 합니다", async () => {
		const user = userEvent.setup();
		render(<Chip>Chip</Chip>);
		const chip = screen.getByRole("button", { name: "Chip" });

		await user.pointer({ keys: "[MouseLeft>]", target: chip });
		expect(chip).toHaveAttribute("data-pressed", "true");

		await user.pointer({ keys: "[/MouseLeft]" });
		expect(chip).toHaveAttribute("data-pressed", "false");
	});

	it("마우스가 벗어날 때 pressed 상태가 해제되어야 합니다", async () => {
		const user = userEvent.setup();
		render(<Chip>Chip</Chip>);
		const chip = screen.getByRole("button", { name: "Chip" });

		await user.pointer({ keys: "[MouseLeft>]", target: chip });
		expect(chip).toHaveAttribute("data-pressed", "true");

		await user.hover(chip);
		await user.unhover(chip);
		expect(chip).toHaveAttribute("data-pressed", "false");
	});

	it("disabled 상태일 때 마우스 다운해도 pressed 상태가 되지 않아야 합니다", async () => {
		const user = userEvent.setup();
		render(<Chip disabled>Chip</Chip>);
		const chip = screen.getByRole("button", { name: "Chip" });

		await user.pointer({ keys: "[MouseLeft>]", target: chip });
		expect(chip).toHaveAttribute("data-pressed", "false");
	});

	it("ref가 전달되어야 합니다", () => {
		const TestComponent = () => {
			const chipRef = useRef<HTMLButtonElement>(null);

			return (
				<>
					<Chip ref={chipRef}>Chip</Chip>
					<div data-testid="ref-check">
						{chipRef.current ? "ref-set" : "ref-not-set"}
					</div>
				</>
			);
		};

		const { rerender } = render(<TestComponent />);
		rerender(<TestComponent />);
		expect(screen.getByTestId("ref-check")).toHaveTextContent("ref-set");
	});

	it("기본 type은 button이어야 합니다", () => {
		render(<Chip>Chip</Chip>);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveAttribute("type", "button");
	});

	it("primary variant에서 filled style이 적용되어야 합니다", () => {
		render(
			<Chip variant="primary" chipStyle="filled">
				Chip
			</Chip>,
		);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveClass("mock-chip-primary-filled");
	});

	it("primary variant에서 light style이 적용되어야 합니다", () => {
		render(
			<Chip variant="primary" chipStyle="light">
				Chip
			</Chip>,
		);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveClass("mock-chip-primary-light");
	});

	it("primary variant에서 default style은 light로 fallback되어야 합니다", () => {
		render(
			<Chip variant="primary" chipStyle="default">
				Chip
			</Chip>,
		);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveClass("mock-chip-primary-light");
	});

	it("secondary variant에서 default style이 적용되어야 합니다", () => {
		render(
			<Chip variant="secondary" chipStyle="default">
				Chip
			</Chip>,
		);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveClass("mock-chip-secondary-default");
	});

	it("secondary variant에서 filled style이 적용되어야 합니다", () => {
		render(
			<Chip variant="secondary" chipStyle="filled">
				Chip
			</Chip>,
		);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveClass("mock-chip-secondary-filled");
	});

	it("secondary variant에서 light style이 적용되어야 합니다", () => {
		render(
			<Chip variant="secondary" chipStyle="light">
				Chip
			</Chip>,
		);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveClass("mock-chip-secondary-light");
	});

	it("danger variant가 적용되어야 합니다", () => {
		render(<Chip variant="danger">Chip</Chip>);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveClass("mock-chip-danger-default");
	});

	it("safe variant가 적용되어야 합니다", () => {
		render(<Chip variant="safe">Chip</Chip>);
		const chip = screen.getByRole("button", { name: "Chip" });
		expect(chip).toHaveClass("mock-chip-safe-default");
	});

	it("displayName이 설정되어야 합니다", () => {
		expect(Chip.displayName).toBe("Chip");
	});
});

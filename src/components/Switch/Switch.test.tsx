import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef, useState } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Switch } from "./Switch";

// vanilla-extract CSS 파일 모킹
vi.mock("./Switch.css", () => ({
	switchButton: "mock-switch-button",
	switchTrack: "mock-switch-track",
	switchThumb: "mock-switch-thumb",
}));

describe("Switch", () => {
	afterEach(() => {
		cleanup();
	});

	it("렌더링되어야 합니다", () => {
		render(<Switch />);
		const switchElement = screen.getByRole("switch");
		expect(switchElement).toBeInTheDocument();
	});

	it("기본적으로 꺼진 상태여야 합니다", () => {
		render(<Switch />);
		const switchElement = screen.getByRole("switch");
		expect(switchElement).toHaveAttribute("aria-checked", "false");
		expect(switchElement).toHaveAttribute("data-checked", "false");
	});

	it("checked prop이 true일 때 켜진 상태여야 합니다", () => {
		render(<Switch checked={true} />);
		const switchElement = screen.getByRole("switch");
		expect(switchElement).toHaveAttribute("aria-checked", "true");
		expect(switchElement).toHaveAttribute("data-checked", "true");
	});

	it("checked prop이 false일 때 꺼진 상태여야 합니다", () => {
		render(<Switch checked={false} />);
		const switchElement = screen.getByRole("switch");
		expect(switchElement).toHaveAttribute("aria-checked", "false");
		expect(switchElement).toHaveAttribute("data-checked", "false");
	});

	it("클릭 시 onChange 핸들러가 호출되어야 합니다", async () => {
		const handleChange = vi.fn();
		const user = userEvent.setup();

		render(<Switch checked={false} onChange={handleChange} />);
		const switchElement = screen.getByRole("switch");

		await user.click(switchElement);
		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith(true);
	});

	it("켜진 상태에서 클릭 시 꺼진 상태로 변경되어야 합니다", async () => {
		const handleChange = vi.fn();
		const user = userEvent.setup();

		render(<Switch checked={true} onChange={handleChange} />);
		const switchElement = screen.getByRole("switch");

		await user.click(switchElement);
		expect(handleChange).toHaveBeenCalledWith(false);
	});

	it("HTML 속성을 전달받아야 합니다", () => {
		render(<Switch aria-label="알림 설정" />);
		const switchElement = screen.getByRole("switch", { name: "알림 설정" });
		expect(switchElement).toBeInTheDocument();
	});

	it("className이 적용되어야 합니다", () => {
		render(<Switch className="custom-class" />);
		const switchElement = screen.getByRole("switch");
		expect(switchElement).toHaveClass("mock-switch-button");
		expect(switchElement).toHaveClass("custom-class");
	});

	it("기본 button 요소로 렌더링되어야 합니다", () => {
		render(<Switch />);
		const switchElement = screen.getByRole("switch");
		expect(switchElement.tagName).toBe("BUTTON");
	});

	it("role이 switch여야 합니다", () => {
		render(<Switch />);
		const switchElement = screen.getByRole("switch");
		expect(switchElement).toHaveAttribute("role", "switch");
	});

	it("기본 type은 button이어야 합니다", () => {
		render(<Switch />);
		const switchElement = screen.getByRole("switch");
		expect(switchElement).toHaveAttribute("type", "button");
	});

	it("ref가 전달되어야 합니다", () => {
		const TestComponent = () => {
			const switchRef = useRef<HTMLButtonElement>(null);

			return (
				<>
					<Switch ref={switchRef} />
					<div data-testid="ref-check">
						{switchRef.current ? "ref-set" : "ref-not-set"}
					</div>
				</>
			);
		};

		render(<TestComponent />);
		expect(screen.getByTestId("ref-check")).toHaveTextContent("ref-set");
	});

	it("onClick 핸들러가 호출되어야 합니다", async () => {
		const handleClick = vi.fn();
		const user = userEvent.setup();

		render(<Switch onClick={handleClick} />);
		const switchElement = screen.getByRole("switch");

		await user.click(switchElement);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("onClick과 onChange가 모두 호출되어야 합니다", async () => {
		const handleClick = vi.fn();
		const handleChange = vi.fn();
		const user = userEvent.setup();

		render(
			<Switch checked={false} onClick={handleClick} onChange={handleChange} />,
		);
		const switchElement = screen.getByRole("switch");

		await user.click(switchElement);
		expect(handleClick).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith(true);
	});

	it("Enter 키로 Switch를 토글할 수 있어야 합니다", async () => {
		const handleChange = vi.fn();
		const user = userEvent.setup();

		render(<Switch checked={false} onChange={handleChange} />);
		const switchElement = screen.getByRole("switch");

		switchElement.focus();
		await user.keyboard("{Enter}");
		expect(handleChange).toHaveBeenCalledWith(true);
	});

	it("Space 키로 Switch를 토글할 수 있어야 합니다", async () => {
		const handleChange = vi.fn();
		const user = userEvent.setup();

		render(<Switch checked={false} onChange={handleChange} />);
		const switchElement = screen.getByRole("switch");

		switchElement.focus();
		await user.keyboard(" ");
		expect(handleChange).toHaveBeenCalledWith(true);
	});

	it("displayName이 설정되어야 합니다", () => {
		expect(Switch.displayName).toBe("Switch");
	});

	it("여러 개의 Switch가 독립적으로 동작해야 합니다", async () => {
		const handleChange1 = vi.fn();
		const handleChange2 = vi.fn();
		const user = userEvent.setup();

		render(
			<>
				<Switch
					checked={false}
					onChange={handleChange1}
					aria-label="Switch 1"
				/>
				<Switch
					checked={false}
					onChange={handleChange2}
					aria-label="Switch 2"
				/>
			</>,
		);

		const switch1 = screen.getByRole("switch", { name: "Switch 1" });
		const switch2 = screen.getByRole("switch", { name: "Switch 2" });

		await user.click(switch1);
		expect(handleChange1).toHaveBeenCalledTimes(1);
		expect(handleChange2).not.toHaveBeenCalled();

		await user.click(switch2);
		expect(handleChange1).toHaveBeenCalledTimes(1);
		expect(handleChange2).toHaveBeenCalledTimes(1);
	});

	it("제어 컴포넌트로 동작해야 합니다", async () => {
		const TestComponent = () => {
			const [checked, setChecked] = useState(false);

			return (
				<>
					<Switch
						checked={checked}
						onChange={setChecked}
						aria-label="제어 Switch"
					/>
					<div data-testid="status">{checked ? "켜짐" : "꺼짐"}</div>
				</>
			);
		};

		const user = userEvent.setup();
		render(<TestComponent />);

		const switchElement = screen.getByRole("switch", { name: "제어 Switch" });
		const status = screen.getByTestId("status");

		expect(status).toHaveTextContent("꺼짐");

		await user.click(switchElement);
		expect(status).toHaveTextContent("켜짐");

		await user.click(switchElement);
		expect(status).toHaveTextContent("꺼짐");
	});
});

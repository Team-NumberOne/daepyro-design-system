import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FloatingButton } from "./FloatingButton";

// vanilla-extract CSS 파일 모킹
vi.mock("./FloatingButton.css", () => ({
  floatingButton: "mock-floating-button",
  iconWrapper: "mock-icon-wrapper",
  contentWrapper: "mock-content-wrapper",
}));

describe("FloatingButton", () => {
  afterEach(() => {
    cleanup();
  });

  it("렌더링되어야 합니다", () => {
    render(<FloatingButton>클릭하세요</FloatingButton>);
    const button = screen.getByRole("button", { name: /클릭하세요/ });
    expect(button).toBeInTheDocument();
  });

  it("children을 표시해야 합니다", () => {
    render(<FloatingButton>테스트 버튼</FloatingButton>);
    expect(screen.getByText("테스트 버튼")).toBeInTheDocument();
  });

  it("disabled 상태일 때 비활성화되어야 합니다", () => {
    render(<FloatingButton disabled>비활성화 버튼</FloatingButton>);
    const button = screen.getByRole("button", { name: /비활성화 버튼/ });
    expect(button).toBeDisabled();
  });

  it("disabled 상태가 아닐 때 활성화되어야 합니다", () => {
    render(<FloatingButton>활성화 버튼</FloatingButton>);
    const button = screen.getByRole("button", { name: /활성화 버튼/ });
    expect(button).not.toBeDisabled();
  });

  it("onClick 핸들러가 호출되어야 합니다", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<FloatingButton onClick={handleClick}>클릭 테스트</FloatingButton>);
    const button = screen.getByRole("button", { name: /클릭 테스트/ });

    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disabled 상태일 때 onClick이 호출되지 않아야 합니다", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <FloatingButton disabled onClick={handleClick}>
        비활성화 클릭 테스트
      </FloatingButton>
    );
    const button = screen.getByRole("button", {
      name: /비활성화 클릭 테스트/,
    });

    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("HTML 속성을 전달받아야 합니다", () => {
    render(
      <FloatingButton type="submit" aria-label="제출 버튼">
        제출
      </FloatingButton>
    );
    const button = screen.getByRole("button", { name: "제출 버튼" });
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveAttribute("aria-label", "제출 버튼");
  });

  it("className이 적용되어야 합니다", () => {
    render(
      <FloatingButton className="custom-class">커스텀 클래스</FloatingButton>
    );
    const button = screen.getByRole("button", { name: /커스텀 클래스/ });
    expect(button).toHaveClass("custom-class");
  });

  it("기본 button 요소로 렌더링되어야 합니다", () => {
    render(<FloatingButton>버튼</FloatingButton>);
    const button = screen.getByRole("button", { name: /버튼/ });
    expect(button.tagName).toBe("BUTTON");
  });

  it("icon prop이 표시되어야 합니다", () => {
    render(<FloatingButton>텍스트</FloatingButton>);
    const button = screen.getByRole("button", { name: /텍스트/ });
    // PlusIcon이 aria-label="+"로 렌더링됨
    expect(screen.getByLabelText("+")).toBeInTheDocument();
    expect(button).toHaveTextContent("텍스트");
  });

  it("icon이 없을 때도 렌더링되어야 합니다", () => {
    render(<FloatingButton>텍스트만</FloatingButton>);
    const button = screen.getByRole("button", { name: /텍스트만/ });
    expect(button).toBeInTheDocument();
  });

  it("ref가 전달되어야 합니다", () => {
    const TestComponent = () => {
      const ref = useRef<HTMLButtonElement>(null);
      return (
        <>
          <FloatingButton ref={ref}>버튼</FloatingButton>
          <div data-testid="ref-check">
            {ref.current ? "ref-set" : "ref-not-set"}
          </div>
        </>
      );
    };

    const { rerender } = render(<TestComponent />);
    // ref는 렌더링 후에 설정되므로 rerender를 통해 확인
    rerender(<TestComponent />);
    expect(screen.getByTestId("ref-check")).toHaveTextContent("ref-set");
  });

  it("마우스 다운 시 pressed 상태가 되어야 합니다", async () => {
    const user = userEvent.setup();
    render(<FloatingButton>버튼</FloatingButton>);
    const button = screen.getByRole("button", { name: /버튼/ });

    await user.pointer({ keys: "[MouseLeft>]", target: button });
    expect(button).toHaveAttribute("data-pressed", "true");

    await user.pointer({ keys: "[/MouseLeft]" });
    expect(button).toHaveAttribute("data-pressed", "false");
  });

  it("disabled 상태일 때 pressed 상태가 되지 않아야 합니다", async () => {
    const user = userEvent.setup();
    render(<FloatingButton disabled>버튼</FloatingButton>);
    const button = screen.getByRole("button", { name: /버튼/ });

    await user.pointer({ keys: "[MouseLeft>]", target: button });
    expect(button).toHaveAttribute("data-pressed", "false");
  });

  it("마우스가 벗어날 때 pressed 상태가 해제되어야 합니다", async () => {
    const user = userEvent.setup();
    render(<FloatingButton>버튼</FloatingButton>);
    const button = screen.getByRole("button", { name: /버튼/ });

    await user.pointer({ keys: "[MouseLeft>]", target: button });
    expect(button).toHaveAttribute("data-pressed", "true");

    await user.hover(button);
    await user.unhover(button);
    expect(button).toHaveAttribute("data-pressed", "false");
  });

  it("onMouseDown 핸들러가 호출되어야 합니다", async () => {
    const handleMouseDown = vi.fn();
    const user = userEvent.setup();

    render(<FloatingButton onMouseDown={handleMouseDown}>버튼</FloatingButton>);
    const button = screen.getByRole("button", { name: /버튼/ });

    await user.pointer({ keys: "[MouseLeft>]", target: button });
    expect(handleMouseDown).toHaveBeenCalledTimes(1);
  });

  it("onMouseUp 핸들러가 호출되어야 합니다", async () => {
    const handleMouseUp = vi.fn();
    const user = userEvent.setup();

    render(<FloatingButton onMouseUp={handleMouseUp}>버튼</FloatingButton>);
    const button = screen.getByRole("button", { name: /버튼/ });

    await user.pointer({ keys: "[MouseLeft>]", target: button });
    await user.pointer({ keys: "[/MouseLeft]" });
    expect(handleMouseUp).toHaveBeenCalledTimes(1);
  });

  it("onMouseLeave 핸들러가 호출되어야 합니다", async () => {
    const handleMouseLeave = vi.fn();
    const user = userEvent.setup();

    render(
      <FloatingButton onMouseLeave={handleMouseLeave}>버튼</FloatingButton>
    );
    const button = screen.getByRole("button", { name: /버튼/ });

    await user.hover(button);
    await user.unhover(button);
    expect(handleMouseLeave).toHaveBeenCalledTimes(1);
  });
});

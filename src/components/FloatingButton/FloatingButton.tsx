import type { ButtonHTMLAttributes, MouseEvent } from "react";
import { forwardRef, useState } from "react";
import { PlusIcon } from "../../icons";
import { contentWrapper, floatingButton } from "./FloatingButton.css";

export interface FloatingButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const FloatingButton = forwardRef<
	HTMLButtonElement,
	FloatingButtonProps
>(
	(
		{
			children,
			type = "button",
			className,
			disabled,
			onMouseDown,
			onMouseUp,
			onMouseLeave,
			...rest
		},
		ref,
	) => {
		const [isPressed, setIsPressed] = useState(false);
		const isDisabled = !!disabled;

		const handleMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
			if (!isDisabled) {
				setIsPressed(true);
			}
			onMouseDown?.(e);
		};

		const handleMouseUp = (e: MouseEvent<HTMLButtonElement>) => {
			setIsPressed(false);
			onMouseUp?.(e);
		};

		const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
			setIsPressed(false);
			onMouseLeave?.(e);
		};

		const mergedClassName = [floatingButton, className]
			.filter(Boolean)
			.join(" ");

		return (
			<button
				ref={ref}
				type={type}
				className={mergedClassName}
				data-pressed={isPressed ? "true" : "false"}
				disabled={isDisabled}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseLeave}
				{...rest}
			>
				<span className={contentWrapper}>{children || null}</span>
				<PlusIcon aria-label="+" />
			</button>
		);
	},
);

FloatingButton.displayName = "FloatingButton";

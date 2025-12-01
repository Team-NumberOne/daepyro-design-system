import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { forwardRef, useState } from "react";
import { buttonVariants, contentWrapper, iconWrapper } from "./Button.css";

type ButtonVariant = keyof typeof buttonVariants;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * 버튼의 스타일 변형
	 * @default "default"
	 */
	variant?: ButtonVariant;
	/**
	 * 버튼 왼쪽에 표시할 아이콘
	 */
	icon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			variant = "default",
			icon,
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

		const mergedClassName = [buttonVariants[variant], className]
			.filter(Boolean)
			.join(" ");

		return (
			<button
				ref={ref}
				type={type}
				className={mergedClassName}
				data-variant={variant}
				data-pressed={isPressed ? "true" : "false"}
				disabled={isDisabled}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseLeave}
				{...rest}
			>
				<span className={iconWrapper} data-icon>
					{icon || null}
				</span>
				<span className={contentWrapper}>{children || null}</span>
			</button>
		);
	},
);

Button.displayName = "Button";

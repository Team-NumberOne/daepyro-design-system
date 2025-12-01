import type { ButtonHTMLAttributes, MouseEvent } from "react";
import { forwardRef, useState } from "react";
import { ArrowRight } from "@/icons/ArrowRight";
import { Close } from "@/icons/Close";
import { chipVariants, dotIcon, iconWrapper } from "./Chip.css";
import type { ChipIcon, ChipStyle, ChipVariant } from "./Chip.types";

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Chip의 스타일 변형
	 * @default "secondary"
	 */
	variant?: ChipVariant;
	/**
	 * Chip의 스타일 (primary는 filled/light만, secondary는 default/filled/light)
	 * @default "default"
	 */
	chipStyle?: ChipStyle;
	/**
	 * Chip에 표시할 아이콘
	 * @default "none"
	 */
	icon?: ChipIcon;
	/**
	 * 아이콘 위치 (dot과 close는 left, arrow-right는 right)
	 */
	iconPosition?: "left" | "right";
	/**
	 * 선택된 상태 (탭 버튼인 경우, radius가 14px로 변경됨)
	 * @default false
	 */
	selected?: boolean;
}

const ICON_SIZE = 16;

const renderIcon = (icon: ChipIcon, color?: string) => {
	switch (icon) {
		case "dot":
			return <span className={dotIcon} style={{ color }} />;
		case "close":
			return <Close size={ICON_SIZE} aria-hidden="true" />;
		case "arrow-right":
			return <ArrowRight size={ICON_SIZE} aria-hidden="true" />;
		default:
			return null;
	}
};

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
	(
		{
			children,
			variant = "secondary",
			chipStyle = "default",
			icon = "none",
			iconPosition,
			selected = false,
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

		// iconPosition이 지정되지 않으면 기본값 설정
		const resolvedIconPosition =
			iconPosition ?? (icon === "arrow-right" ? "right" : "left");

		// variant와 style 조합에 따른 className 결정
		const getVariantClassName = () => {
			if (variant === "primary") {
				if (chipStyle === "filled") {
					return chipVariants.primary.filled;
				}
				if (chipStyle === "light") {
					return chipVariants.primary.light;
				}
				// primary는 default가 없으므로 light로 fallback
				return chipVariants.primary.light;
			}

			if (variant === "secondary") {
				if (chipStyle === "filled") {
					return chipVariants.secondary.filled;
				}
				if (chipStyle === "light") {
					return chipVariants.secondary.light;
				}
				return chipVariants.secondary.default;
			}

			if (variant === "danger") {
				return chipVariants.danger.default;
			}

			if (variant === "safe") {
				return chipVariants.safe.default;
			}

			return chipVariants.secondary.default;
		};

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

		const variantClassName = getVariantClassName();
		const mergedClassName = [variantClassName, className]
			.filter(Boolean)
			.join(" ");

		const iconElement = icon !== "none" ? renderIcon(icon) : null;

		return (
			<button
				ref={ref}
				type={type}
				className={mergedClassName}
				data-variant={variant}
				data-chip-style={chipStyle}
				data-pressed={isPressed ? "true" : "false"}
				data-selected={selected ? "true" : "false"}
				disabled={isDisabled}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseLeave}
				{...rest}
			>
				{resolvedIconPosition === "left" && iconElement && (
					<span className={iconWrapper}>{iconElement}</span>
				)}
				{children && <span>{children}</span>}
				{resolvedIconPosition === "right" && iconElement && (
					<span className={iconWrapper}>{iconElement}</span>
				)}
			</button>
		);
	},
);

Chip.displayName = "Chip";

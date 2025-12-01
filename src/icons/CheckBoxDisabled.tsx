import type { SVGProps } from "react";

export interface CheckBoxDisabledProps extends SVGProps<SVGSVGElement> {
	/**
	 * 아이콘 크기
	 * @default 24
	 */
	size?: number;
	/**
	 * 아이콘의 접근성 레이블
	 * 제공하지 않으면 장식용으로 처리됩니다 (aria-hidden="true")
	 */
	"aria-label"?: string;
}

export const CheckBoxDisabled = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: CheckBoxDisabledProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			aria-label={ariaLabel}
			aria-hidden={!ariaLabel}
			{...props}
		>
			<rect width={16} height={16} x={4} y={4} fill="currentColor" rx={1} />
		</svg>
	);
};

CheckBoxDisabled.displayName = "CheckBoxDisabled";

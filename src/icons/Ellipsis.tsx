import type { SVGProps } from "react";

export interface EllipsisProps extends SVGProps<SVGSVGElement> {
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

export const Ellipsis = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: EllipsisProps) => {
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
			<circle cx={12} cy={6} r={1.5} fill="currentColor" />
			<circle cx={12} cy={12} r={1.5} fill="currentColor" />
			<circle cx={12} cy={18} r={1.5} fill="currentColor" />
		</svg>
	);
};

Ellipsis.displayName = "Ellipsis";

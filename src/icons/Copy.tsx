import type { SVGProps } from "react";

export interface CopyProps extends SVGProps<SVGSVGElement> {
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

export const Copy = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: CopyProps) => {
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
			<path
				stroke="currentColor"
				d="M9 4.5h9a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5Z"
			/>
			<path
				fill="currentColor"
				d="M5 8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"
			/>
		</svg>
	);
};

Copy.displayName = "Copy";

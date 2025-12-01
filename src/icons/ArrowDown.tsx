import type { SVGProps } from "react";

export interface ArrowDownProps extends SVGProps<SVGSVGElement> {
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

export const ArrowDown = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: ArrowDownProps) => {
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
				fill="currentColor"
				fillRule="evenodd"
				d="m3.116 9.884 1.768-1.768L12 15.232l7.116-7.116 1.768 1.768L12 18.768z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

ArrowDown.displayName = "ArrowDown";

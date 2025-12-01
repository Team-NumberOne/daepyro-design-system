import type { SVGProps } from "react";

export interface ArrowTopProps extends SVGProps<SVGSVGElement> {
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

export const ArrowTop = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: ArrowTopProps) => {
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
				d="m20.884 14.116-1.768 1.768L12 8.768l-7.116 7.116-1.768-1.768L12 5.232z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

ArrowTop.displayName = "ArrowTop";

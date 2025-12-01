import type { SVGProps } from "react";

export interface ArrowRightProps extends SVGProps<SVGSVGElement> {
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

export const ArrowRight = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: ArrowRightProps) => {
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
				d="m9.884 20.884-1.768-1.768L15.232 12 8.116 4.884l1.768-1.768L18.768 12z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

ArrowRight.displayName = "ArrowRight";

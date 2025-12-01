import type { SVGProps } from "react";

export interface ArrowLeftProps extends SVGProps<SVGSVGElement> {
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

export const ArrowLeft = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: ArrowLeftProps) => {
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
				d="m14.116 3.116 1.768 1.768L8.768 12l7.116 7.116-1.768 1.768L5.232 12z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

ArrowLeft.displayName = "ArrowLeft";

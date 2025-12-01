import type { SVGProps } from "react";

export interface CircleSymbolProps extends SVGProps<SVGSVGElement> {
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

export const CircleSymbol = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: CircleSymbolProps) => {
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
				fill="#FF8754"
				fillRule="evenodd"
				d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M9.445 8.427v7.167l3.133-.668V9.073zM16 7v10H8V7z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

CircleSymbol.displayName = "CircleSymbol";

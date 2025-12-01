import type { SVGProps } from "react";

export interface CloseProps extends SVGProps<SVGSVGElement> {
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

export const Close = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: CloseProps) => {
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
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M8.288 7.225 12 10.937l3.712-3.712 1.06 1.06-3.711 3.713 3.712 3.712-1.06 1.06L12 13.06l-3.712 3.71-1.061-1.06 3.712-3.713-3.712-3.712z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Close.displayName = "Close";

import type { SVGProps } from "react";

export interface FundingProps extends SVGProps<SVGSVGElement> {
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

export const Funding = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: FundingProps) => {
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
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m4.75-11.273c0 1.819-.978 2.94-4.582 6.122a.25.25 0 0 1-.336 0c-3.604-3.182-4.582-4.303-4.582-6.122C7.25 9.212 8.368 8 9.765 8c.75 0 1.284.299 1.69.658.213.19.39.396.545.584a5 5 0 0 1 .546-.584c.405-.36.94-.658 1.69-.658 1.396 0 2.514 1.212 2.514 2.727"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Funding.displayName = "Funding";

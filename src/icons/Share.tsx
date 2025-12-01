import type { SVGProps } from "react";

export interface ShareProps extends SVGProps<SVGSVGElement> {
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

export const Share = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: ShareProps) => {
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
				d="m16.614 5.357.772 1.286L8.458 12l8.928 5.357-.772 1.286L5.542 12z"
				clipRule="evenodd"
			/>
			<circle cx={17} cy={6} r={2} fill="currentColor" />
			<circle cx={17} cy={18} r={2} fill="currentColor" />
			<circle cx={7} cy={12} r={2} fill="currentColor" />
		</svg>
	);
};

Share.displayName = "Share";

import type { SVGProps } from "react";

export interface PlusProps extends SVGProps<SVGSVGElement> {
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

export const Plus = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: PlusProps) => {
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
				d="M20 13.25H4v-2.5h16z"
				clipRule="evenodd"
			/>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M13.25 4v16h-2.5V4z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Plus.displayName = "Plus";

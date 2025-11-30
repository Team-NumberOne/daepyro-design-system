import type { SVGProps } from "react";

export interface PlusIconProps extends SVGProps<SVGSVGElement> {
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

export const PlusIcon = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: PlusIconProps) => {
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
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20 13.25L4 13.25L4 10.75L20 10.75L20 13.25Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.25 4L13.25 20L10.75 20L10.75 4L13.25 4Z"
				fill="currentColor"
			/>
		</svg>
	);
};

PlusIcon.displayName = "PlusIcon";

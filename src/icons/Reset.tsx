import type { SVGProps } from "react";

export interface ResetProps extends SVGProps<SVGSVGElement> {
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

export const Reset = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: ResetProps) => {
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
				d="M16.218 7.25a6.309 6.309 0 1 0 2.09 4.75h1.5a7.81 7.81 0 1 1-2.793-6.045V4h1.5v4.75h-4.75v-1.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Reset.displayName = "Reset";

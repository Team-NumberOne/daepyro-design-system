import type { SVGProps } from "react";

export interface WarningProps extends SVGProps<SVGSVGElement> {
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

export const Warning = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: WarningProps) => {
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
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-.7-8a.3.3 0 0 1-.3-.3V7.3a.3.3 0 0 1 .3-.3h1.4a.3.3 0 0 1 .3.3v6.4a.3.3 0 0 1-.3.3zm-.3 2.7a.3.3 0 0 0 .3.3h1.4a.3.3 0 0 0 .3-.3v-1.4a.3.3 0 0 0-.3-.3h-1.4a.3.3 0 0 0-.3.3z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Warning.displayName = "Warning";

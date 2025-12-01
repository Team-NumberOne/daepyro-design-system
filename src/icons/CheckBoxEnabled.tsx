import type { SVGProps } from "react";

export interface CheckBoxEnabledProps extends SVGProps<SVGSVGElement> {
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

export const CheckBoxEnabled = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: CheckBoxEnabledProps) => {
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
				d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm6.3 11.036 4.717-4.493-1.034-1.086-3.683 3.507-2.283-2.174-1.034 1.086z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

CheckBoxEnabled.displayName = "CheckBoxEnabled";

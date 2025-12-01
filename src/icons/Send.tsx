import type { SVGProps } from "react";

export interface SendProps extends SVGProps<SVGSVGElement> {
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

export const Send = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: SendProps) => {
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
				d="M20.338 5.554a1 1 0 0 0-1.265-1.265L3.088 9.618c-.814.271-.93 1.376-.19 1.81l5.821 3.42 5.267-5.267a.75.75 0 0 1 1.06 1.061L9.78 15.908l3.419 5.821c.435.74 1.54.625 1.81-.19z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Send.displayName = "Send";

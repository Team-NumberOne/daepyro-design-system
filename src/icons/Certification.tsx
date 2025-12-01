import type { SVGProps } from "react";

export interface CertificationProps extends SVGProps<SVGSVGElement> {
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

export const Certification = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: CertificationProps) => {
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
				d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10.7 3.036 4.717-4.493-1.034-1.086-3.683 3.507-2.283-2.174-1.034 1.086z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Certification.displayName = "Certification";

import type { SVGProps } from "react";

export interface PhoneProps extends SVGProps<SVGSVGElement> {
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

export const Phone = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: PhoneProps) => {
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
				d="M6.548 3.407a1.93 1.93 0 0 1 1.893.21h.002c1.268.925 2.176 2.27 2.875 3.305l.229.337a1.955 1.955 0 0 1-.334 2.582l-.02.018-1.33.987c.345.58.858 1.315 1.417 1.874.564.563 1.336 1.11 1.96 1.491l.844-1.284.015-.02a1.955 1.955 0 0 1 2.673-.43l.23.158c1.063.732 2.365 1.63 3.341 2.879l.001.001a1.93 1.93 0 0 1 .248 1.947c-.765 1.785-2.71 3.364-4.85 3.285-1.302-.048-4.766-.553-8.351-4.137S3.3 9.562 3.253 8.26c-.078-2.135 1.519-4.092 3.295-4.853"
			/>
		</svg>
	);
};

Phone.displayName = "Phone";

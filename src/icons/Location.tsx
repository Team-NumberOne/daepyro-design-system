import type { SVGProps } from "react";

export interface LocationProps extends SVGProps<SVGSVGElement> {
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

export const Location = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: LocationProps) => {
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
				d="M12 2C8.13 2 5 5.13 5 9c0 4.208 4.496 10.021 6.282 12.164a.926.926 0 0 0 1.436 0C14.504 19.02 19 13.208 19 9c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5"
			/>
		</svg>
	);
};

Location.displayName = "Location";

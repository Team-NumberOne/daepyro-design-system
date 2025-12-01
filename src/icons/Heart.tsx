import type { SVGProps } from "react";

export interface HeartProps extends SVGProps<SVGSVGElement> {
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

export const Heart = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: HeartProps) => {
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
				d="m11.7 20.73.3.27.3-.27c6.45-5.656 8.2-7.65 8.2-10.882C20.5 7.155 18.5 5 16 5c-1.342 0-2.299.531-3.024 1.17A9 9 0 0 0 12 7.21a9 9 0 0 0-.976-1.039C10.299 5.531 9.342 5 8 5 5.5 5 3.5 7.155 3.5 9.848c0 3.233 1.75 5.226 8.2 10.883"
			/>
		</svg>
	);
};

Heart.displayName = "Heart";

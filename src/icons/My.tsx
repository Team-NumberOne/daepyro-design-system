import type { SVGProps } from "react";

export interface MyProps extends SVGProps<SVGSVGElement> {
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

export const My = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: MyProps) => {
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
				d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 8c4.418 0 8-1.567 8-3.5S16.418 13 12 13s-8 1.567-8 3.5S7.582 20 12 20"
				clipRule="evenodd"
			/>
		</svg>
	);
};

My.displayName = "My";

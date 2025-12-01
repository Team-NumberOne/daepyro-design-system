import type { SVGProps } from "react";

export interface PhotoProps extends SVGProps<SVGSVGElement> {
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

export const Photo = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: PhotoProps) => {
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
				d="M4 19V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1m5.728-.5H18.5v-2.773l-3-3zm-4.228 0v-1.416l3.013-3.013 1.867 1.866L7.817 18.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Photo.displayName = "Photo";

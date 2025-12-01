import type { SVGProps } from "react";

export interface SearchProps extends SVGProps<SVGSVGElement> {
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

export const Search = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: SearchProps) => {
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
				d="M10.5 18.5a7.97 7.97 0 0 0 4.87-1.653l4.655 4.655 1.477-1.477-4.655-4.655A8 8 0 1 0 10.5 18.5m6.5-8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Search.displayName = "Search";

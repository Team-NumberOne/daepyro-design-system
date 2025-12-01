import type { SVGProps } from "react";

export interface FilterProps extends SVGProps<SVGSVGElement> {
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

export const Filter = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: FilterProps) => {
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
				d="M9.447 11.695v7.647a.5.5 0 0 0 .38.486l4.106 1.018a.5.5 0 0 0 .62-.485v-8.666l5.855-7.897a.5.5 0 0 0-.4-.798H3.993a.5.5 0 0 0-.401.798z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Filter.displayName = "Filter";

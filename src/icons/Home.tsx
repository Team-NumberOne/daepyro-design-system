import type { SVGProps } from "react";

export interface HomeProps extends SVGProps<SVGSVGElement> {
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

export const Home = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: HomeProps) => {
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
				d="M21 19.886a1 1 0 0 1-1 1h-6v-5.925h-4v5.925H4a1 1 0 0 1-1-1V11.52a1 1 0 0 1 .33-.742l8-7.214a1 1 0 0 1 1.34 0l8 7.214a1 1 0 0 1 .33.742z"
			/>
		</svg>
	);
};

Home.displayName = "Home";

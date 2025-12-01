import type { SVGProps } from "react";

export interface CommunityProps extends SVGProps<SVGSVGElement> {
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

export const Community = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: CommunityProps) => {
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
				d="M3.5 6.044C3.5 4.915 4.41 4 5.532 4h12.936c1.122 0 2.032.915 2.032 2.044v10.051c0 1.13-.91 2.044-2.032 2.044H11.82l-3.591 2.605a.87.87 0 0 1-.95.19.88.88 0 0 1-.536-.81v-1.985h-1.21A2.04 2.04 0 0 1 3.5 16.095z"
			/>
		</svg>
	);
};

Community.displayName = "Community";

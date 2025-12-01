import type { SVGProps } from "react";

export interface GoodProps extends SVGProps<SVGSVGElement> {
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

export const Good = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: GoodProps) => {
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
				d="M3.5 9.47h1.618v10.784H3.5zm11.917-5.906a2.66 2.66 0 0 1 .586 3.557l-1.537 2.344a.052.052 0 0 0 .043.08h2.753c2.232 0 3.793 2.207 3.051 4.311l-1.337 4.874a2.16 2.16 0 0 1-2.034 1.44H6.768a.57.57 0 0 1-.572-.573v-10q0-.052.03-.093l5.371-5.368a2.66 2.66 0 0 1 3.82-.572"
			/>
		</svg>
	);
};

Good.displayName = "Good";

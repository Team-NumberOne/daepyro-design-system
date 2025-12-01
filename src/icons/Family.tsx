import type { SVGProps } from "react";

export interface FamilyProps extends SVGProps<SVGSVGElement> {
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

export const Family = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: FamilyProps) => {
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
				d="M9 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m8.5 4.5c0 .522-.136 1.026-.389 1.5C19.821 17.47 22 16.361 22 15c0-1.38-2.239-2.5-5-2.5-.595 0-1.165.052-1.694.147C16.67 13.534 17.5 14.71 17.5 16m2-7a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M9 19.5c3.866 0 7-1.567 7-3.5s-3.134-3.5-7-3.5-7 1.567-7 3.5 3.134 3.5 7 3.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Family.displayName = "Family";

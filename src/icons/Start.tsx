import type { SVGProps } from "react";

export interface StartProps extends SVGProps<SVGSVGElement> {
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

export const Start = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: StartProps) => {
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
				d="m17.752 12.832-9.197 6.131A1 1 0 0 1 7 18.132V5.87a1 1 0 0 1 1.555-.833l9.197 6.132a1 1 0 0 1 0 1.664"
			/>
		</svg>
	);
};

Start.displayName = "Start";

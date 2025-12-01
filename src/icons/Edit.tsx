import type { SVGProps } from "react";

export interface EditProps extends SVGProps<SVGSVGElement> {
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

export const Edit = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: EditProps) => {
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
				d="M3.293 16.96a1 1 0 0 0-.293.707v2.335a1 1 0 0 0 1 1h2.336a1 1 0 0 0 .707-.292L17.81 9.942l-3.75-3.75zM20.71 7.042a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
			/>
		</svg>
	);
};

Edit.displayName = "Edit";

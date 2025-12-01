import type { SVGProps } from "react";

export interface SaveProps extends SVGProps<SVGSVGElement> {
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

export const Save = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: SaveProps) => {
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
				d="M5.831 20.265A.5.5 0 0 1 5 19.891V4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v15.39a.5.5 0 0 1-.831.375L12 14.812z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Save.displayName = "Save";

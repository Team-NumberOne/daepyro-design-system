import type { SVGProps } from "react";

export interface EyeProps extends SVGProps<SVGSVGElement> {
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

export const Eye = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: EyeProps) => {
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
				d="M12 9.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10M12 5C7.56 5 3.695 7.453 1.674 11.076a2.92 2.92 0 0 0 0 2.848C3.695 17.547 7.56 20 12 20s8.305-2.453 10.326-6.076a2.92 2.92 0 0 0 0-2.848C20.305 7.453 16.44 5 12 5"
			/>
		</svg>
	);
};

Eye.displayName = "Eye";

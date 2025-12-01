import type { SVGProps } from "react";

export interface LogoSymbolProps extends SVGProps<SVGSVGElement> {
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

export const LogoSymbol = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: LogoSymbolProps) => {
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
				fill="#FF6929"
				d="M19 20V4H5v16zM7.528 17.751V6.283l5.484 1.034v9.365z"
			/>
		</svg>
	);
};

LogoSymbol.displayName = "LogoSymbol";

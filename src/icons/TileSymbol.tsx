import type { SVGProps } from "react";

export interface TileSymbolProps extends SVGProps<SVGSVGElement> {
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

export const TileSymbol = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: TileSymbolProps) => {
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
				d="m12.744 9.442-2.372-.437a.312.312 0 0 0-.372.301v5.389c0 .191.18.336.374.3l2.372-.451a.31.31 0 0 0 .254-.3v-4.5a.31.31 0 0 0-.256-.301z"
			/>
			<path
				fill="#FF6929"
				d="m19.715 8.898-4.613-4.613a4.387 4.387 0 0 0-6.204 0L4.285 8.898a4.387 4.387 0 0 0 0 6.204l4.613 4.613a4.386 4.386 0 0 0 6.204 0l4.613-4.613a4.386 4.386 0 0 0 0-6.204m-4.07 6.984a.3.3 0 0 1-.298.298H8.653a.3.3 0 0 1-.299-.298V8.118c0-.165.134-.298.299-.298h6.694c.166 0 .299.134.299.298z"
			/>
		</svg>
	);
};

TileSymbol.displayName = "TileSymbol";

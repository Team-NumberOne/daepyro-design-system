import type { SVGProps } from "react";

export interface AlramProps extends SVGProps<SVGSVGElement> {
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

export const Alram = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: AlramProps) => {
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
				d="M4.902 8.844C5.267 5.242 8.335 2.5 12 2.5s6.734 2.742 7.098 6.344l.499 4.924a.3.3 0 0 0 .051.137l.981 1.399c.948 1.35-.03 3.196-1.695 3.196H5.066c-1.664 0-2.643-1.846-1.695-3.196l.981-1.4a.3.3 0 0 0 .051-.136z"
				clipRule="evenodd"
			/>
			<path
				fill="currentColor"
				d="M16 19.5c0 .263-.104.523-.305.765-.2.243-.495.463-.867.65a5.4 5.4 0 0 1-1.297.433c-.486.1-1.006.152-1.531.152a7.6 7.6 0 0 1-1.53-.152 5.4 5.4 0 0 1-1.298-.434c-.372-.186-.667-.406-.868-.649-.2-.242-.304-.502-.304-.765z"
			/>
		</svg>
	);
};

Alram.displayName = "Alram";

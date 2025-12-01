import type { SVGProps } from "react";

export interface NotiProps extends SVGProps<SVGSVGElement> {
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

export const Noti = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: NotiProps) => {
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
				d="M14 7H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h2l3.485 2.091A1 1 0 0 0 19 16.234V5.766a1 1 0 0 0-1.515-.857z"
			/>
		</svg>
	);
};

Noti.displayName = "Noti";

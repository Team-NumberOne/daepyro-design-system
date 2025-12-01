import type { SVGProps } from "react";

export interface WeatherProps extends SVGProps<SVGSVGElement> {
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

export const Weather = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: WeatherProps) => {
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
				d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
				clipRule="evenodd"
			/>
			<path
				fill="currentColor"
				d="M11.5 2h1v3h-1zm0 17h1v3h-1zM2 12.5v-1h3v1zm17 0v-1h3v1zM5.283 19.425l-.707-.707 2.121-2.122.707.707zM17.304 7.404l-.707-.707 2.12-2.122.708.708zm2.12 11.313-.707.708-2.121-2.122.707-.707zM7.403 6.697l-.707.707-2.12-2.122.706-.707z"
			/>
		</svg>
	);
};

Weather.displayName = "Weather";

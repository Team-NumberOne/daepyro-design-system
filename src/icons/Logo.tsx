import type { SVGProps } from "react";

export interface LogoProps extends SVGProps<SVGSVGElement> {
	/**
	 * 아이콘 높이 (가로는 비율에 맞춰 자동 조정)
	 * @default 24
	 */
	size?: number;
	/**
	 * 아이콘의 접근성 레이블
	 * 제공하지 않으면 장식용으로 처리됩니다 (aria-hidden="true")
	 */
	"aria-label"?: string;
}

export const Logo = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: LogoProps) => {
	const aspectRatio = 4.05;
	const width = size * aspectRatio;
	const height = size;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 81 20"
			fill="none"
			aria-label={ariaLabel}
			aria-hidden={!ariaLabel}
			{...props}
		>
			<path
				fill="#FF6929"
				d="M23.918 0h8.262v2.854h-5.113v14.327h5.491v2.804h-8.646zm9.974 0h7.465v19.99h-2.922V2.816h-1.648V19.99h-2.895z"
			/>
			<path
				fill="#FF6929"
				d="M23.959.01h8.262v2.854h-5.113V17.19h5.491v2.804h-8.646zm9.973 0h7.465V20h-2.92V2.824h-1.65V20h-2.895zM17.433 19.99V0H0v19.99zm-14.29-2.81V2.855L9.97 4.14v11.706zM43.515 0h11.727v2.854H53.51v14.327h1.733v2.804H43.515V17.18h1.626V2.854h-1.626zm4.673 17.176h2.303V2.854h-2.303zM60.53 19.98h-2.958V0h2.958zm9.203-2.8v-3.926h-6.277V5.326h12.62V2.83h-12.62V0h15.469v7.987h-12.62v2.43h12.786v2.837h-6.445v3.93h7.629v2.804h-18.17v-2.804z"
			/>
		</svg>
	);
};

Logo.displayName = "Logo";

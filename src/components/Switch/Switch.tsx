import type { ButtonHTMLAttributes, MouseEvent } from "react";
import { forwardRef } from "react";
import { switchButton, switchThumb, switchTrack } from "./Switch.css";

export interface SwitchProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
	/**
	 * Switch의 켜짐/꺼짐 상태
	 * @default false
	 */
	checked?: boolean;
	/**
	 * Switch 상태 변경 이벤트 핸들러
	 */
	onChange?: (checked: boolean) => void;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
	({ checked = false, onChange, className, onClick, ...rest }, ref) => {
		const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
			onChange?.(!checked);
			onClick?.(e);
		};

		const mergedClassName = [switchButton, className].filter(Boolean).join(" ");

		return (
			<button
				ref={ref}
				type="button"
				role="switch"
				aria-checked={checked}
				className={mergedClassName}
				data-checked={checked ? "true" : "false"}
				onClick={handleClick}
				{...rest}
			>
				<span className={switchTrack}>
					<span className={switchThumb} />
				</span>
			</button>
		);
	},
);

Switch.displayName = "Switch";

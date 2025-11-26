import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { button } from "./Button.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const Button = ({ children, ...rest }: Props) => {
	return (
		<button className={button} {...rest}>
			{children}
		</button>
	);
};

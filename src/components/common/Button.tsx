import { MouseEventHandler } from "react";

interface ButtonProps {
	text: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, onClick }: ButtonProps) => {
	return (
		<button
			className="w-full h-[60px] rounded-[16px] font-semibold text-base bg-blue text-white tracking-tighter"
			onClick={onClick}
		>
			{text}
		</button>
	);
};
export default Button;

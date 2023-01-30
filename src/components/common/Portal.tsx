import { ReactNode, useState, useEffect } from "react";
import ReactDOM from "react-dom";

interface Type {
	children: ReactNode;
	selector?: string;
	backgroundClick?: () => void;
}

const Portal = ({ children, selector = "_modal" }: Type) => {
	const [element, setElement] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setElement(document.getElementById(selector));
	}, [selector]);

	if (!element) {
		return <></>;
	}

	return ReactDOM.createPortal(
		<div className="flex justify-center items-center bg-black bg-opacity-30 absolute z-50 top-0 w-full h-screen px-5">
			{children}
		</div>,
		element
	);
};

export default Portal;

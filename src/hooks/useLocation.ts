import { useLocation } from "react-router-dom";

const usePath = () => {
	const location = useLocation();
	const isHome = location.pathname === "/";
	return { isHome };
};

export default usePath;

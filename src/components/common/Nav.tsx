import { useNavigate } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Scrap } from "../../assets/scrap.svg";
import usePath from "../../hooks/useLocation";

const Nav = () => {
	const navigation = useNavigate();
	const { isHome } = usePath();

	return (
		<nav className="fixed bottom-0 flex justify-between bg-black w-full h-[85px] px-20 py-5 rounded-[30px]">
			<button
				onClick={() => navigation(`/`)}
				className="flex flex-col justify-between items-center"
			>
				<Home fill={isHome ? "#ffffff" : "#6D6D6D"} />
				<p
					className={`text-xxs font-semibold
 ${isHome ? "text-white" : "text-unactive"}`}
				>
					홈
				</p>
			</button>
			<button
				onClick={() => navigation(`/scrap`)}
				className="flex flex-col justify-between items-center"
			>
				<Scrap stroke={isHome ? "#6D6D6D" : "#ffffff"} />
				<p
					className={`text-xxs font-semibold
 ${isHome ? "text-unactive" : "text-white"}`}
				>
					스크랩
				</p>
			</button>
		</nav>
	);
};

export default Nav;

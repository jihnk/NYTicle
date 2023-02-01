import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { editMainCountry, editScrapCountry } from "../redux/filterSlice";
import { AppDispatch } from "../redux/store";
import { Store } from "../types/store";

interface CountryItemProps {
	name: string;
}

const CountryItem = ({ name }: CountryItemProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const location = useLocation();
	const isHome = location.pathname === "/";

	const { main, scrap } = useSelector((state: Store) => {
		return state.filter;
	});

	const onClick = () => {
		isHome ? dispatch(editMainCountry(name)) : dispatch(editScrapCountry(name));
	};

	return (
		<button
			className={
				isHome
					? main.country.includes(name)
						? "flex flex-none justify-center items-center w-fit border border-gray rounded-[16px] gap-1 px-2 py-0.5 bg-blue text-white"
						: "flex flex-none justify-center items-center w-fit border border-gray rounded-[16px] gap-1 px-2 py-0.5"
					: scrap.country.includes(name)
					? "flex flex-none justify-center items-center w-fit border border-gray rounded-[16px] gap-1 px-2 py-0.5 bg-blue text-white"
					: "flex flex-none justify-center items-center w-fit border border-gray rounded-[16px] gap-1 px-2 py-0.5"
			}
			onClick={onClick}
		>
			<p
				className={
					isHome
						? main.country.includes(name)
							? "text-md text-white"
							: "text-md text-unactive"
						: scrap.country.includes(name)
						? "text-md text-white"
						: "text-md text-unactive"
				}
			>
				{name}
			</p>
		</button>
	);
};
export default CountryItem;

import { useRecoilState } from "recoil";
import usePath from "../hooks/useLocation";
import { filterState } from "../recoil/atom";

interface CountryItemProps {
	name: string;
}

const CountryItem = ({ name }: CountryItemProps) => {
	const { isHome } = usePath();
	const [filter, setFilter] = useRecoilState(filterState);
	const { main, scrap } = filter;

	const onClick = () => {
		if (isHome) {
			if (!main.country.includes(name)) {
				setFilter({
					...filter,
					main: { ...main, country: [...main.country, name] },
				});
			} else {
				setFilter({
					...filter,
					main: {
						...main,
						country: [...main.country.filter((country) => country !== name)],
					},
				});
			}
		} else {
			if (!scrap.country.includes(name)) {
				setFilter({
					...filter,
					scrap: { ...scrap, country: [...scrap.country, name] },
				});
			} else {
				setFilter({
					...filter,
					scrap: {
						...scrap,
						country: [...scrap.country.filter((country) => country !== name)],
					},
				});
			}
		}
	};

	return (
		<button
			className={
				isHome
					? main.country.includes(name)
						? "filter-active"
						: "filter-unactive"
					: scrap.country.includes(name)
					? "filter-active"
					: "filter-unactive"
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

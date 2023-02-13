import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import useModal from "../../hooks/useModal";
import { Store } from "../../types/store";
import FilterModal from "./FilterModal";

const Filter = () => {
	const location = useLocation();
	const isHome = location.pathname === "/";
	const { main, scrap } = useSelector((state: Store) => {
		return state.filter;
	});
	const [isOpenModal, handleModal] = useModal(false);
	const isFilteredHeadline = useMemo(
		() => (isHome && main.headline) || (!isHome && scrap.headline),
		[isHome, main.headline, scrap.headline]
	);
	const isFilteredDate = useMemo(
		() => (isHome && main.pub_date) || (!isHome && scrap.pub_date),
		[isHome, main.pub_date, scrap.pub_date]
	);
	const isFilteredCountry = useMemo(
		() => (isHome && main.country.length) || (!isHome && scrap.country.length),
		[isHome, main.country.length, scrap.country.length]
	);

	return (
		<>
			<section
				className="flex items-center h-[60px] px-5 gap-2 bg-white"
				onClick={handleModal}
			>
				<button className={isFilteredHeadline ? "btn-blue" : "btn-white"}>
					<Search fill={isFilteredHeadline ? "#3478F6" : "#6D6D6D"} />
					<p
						className={
							isFilteredHeadline ? "text-md text-blue" : "text-md text-unactive"
						}
					>
						{isHome
							? main.headline !== ""
								? main.headline
								: "전체 헤드라인"
							: scrap.headline !== ""
							? scrap.headline
							: "전체 헤드라인"}
					</p>
				</button>
				<button className={isFilteredDate ? "btn-blue" : "btn-white"}>
					<Calendar fill={isFilteredDate ? "#3478F6" : "#6D6D6D"} />
					<p
						className={
							isFilteredDate ? "text-md text-blue" : "text-md text-unactive"
						}
					>
						{isHome
							? main.pub_date
								? main.pub_date.replaceAll("-", ".")
								: "전체 날짜"
							: scrap.pub_date
							? scrap.pub_date.replaceAll("-", ".")
							: "전체 날짜"}
					</p>
				</button>
				<button className={isFilteredCountry ? "btn-blue" : "btn-white"}>
					<p
						className={
							isFilteredCountry ? "text-md text-blue" : "text-md text-unactive"
						}
					>
						{isFilteredCountry
							? isHome
								? main.country.length === 1
									? main.country[0]
									: `${main.country[0]} 외 ${main.country.length - 1}개`
								: scrap.country.length === 1
								? scrap.country[0]
								: `${scrap.country[0]} 외 ${scrap.country.length - 1}개`
							: `전체 국가`}
					</p>
				</button>
			</section>
			{isOpenModal && <FilterModal handleClose={handleModal} />}
		</>
	);
};

export default Filter;

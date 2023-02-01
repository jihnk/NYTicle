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
	const isFilteredHeadline =
		(isHome && main.headline) || (!isHome && scrap.headline);
	const isFilteredDate =
		(isHome && main.pub_date) || (!isHome && scrap.pub_date);

	return (
		<>
			<section
				className="flex items-center h-[60px] px-5 gap-2 bg-white"
				onClick={handleModal}
			>
				<button
					className={
						isFilteredHeadline
							? "flex justify-center items-center h-fit border border-blue rounded-xl gap-1 px-2"
							: "flex justify-center items-center h-fit border border-gray rounded-xl gap-1 px-2"
					}
				>
					<Search fill={isFilteredHeadline ? "#3478F6" : "#6D6D6D"} />
					<p
						className={
							isFilteredHeadline
								? "text-md text-blue "
								: "text-md text-unactive"
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
				<button
					className={
						isFilteredDate
							? "flex justify-center items-center h-fit border border-blue rounded-xl gap-1 px-2"
							: "flex justify-center items-center h-fit border border-gray rounded-xl gap-1 px-2"
					}
				>
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
				<button
					className={`flex justify-center items-center h-fit border border-gray rounded-xl gap-1 px-2`}
				>
					<p className="text-md text-unactive">전체 국가</p>
				</button>
			</section>
			{isOpenModal && <FilterModal handleClose={handleModal} />}
		</>
	);
};

export default Filter;

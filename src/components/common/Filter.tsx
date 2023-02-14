import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import useModal from "../../hooks/useModal";
import { FilterType } from "../../types/filter";
import FilterModal from "./FilterModal";

interface FilterProps {
	filterData: FilterType;
}
const Filter = ({ filterData }: FilterProps) => {
	const { headline, pub_date, country } = filterData;
	const [isOpenModal, handleModal] = useModal(false);

	return (
		<>
			<section
				className="flex items-center h-[60px] px-5 gap-2 bg-white"
				onClick={handleModal}
			>
				<button className={headline ? "btn-blue" : "btn-white"}>
					<Search fill={headline ? "#3478F6" : "#6D6D6D"} />
					<p
						className={headline ? "text-md text-blue" : "text-md text-unactive"}
					>
						{headline ? headline : "전체 헤드라인"}
					</p>
				</button>
				<button className={pub_date ? "btn-blue" : "btn-white"}>
					<Calendar fill={pub_date ? "#3478F6" : "#6D6D6D"} />
					<p
						className={pub_date ? "text-md text-blue" : "text-md text-unactive"}
					>
						{pub_date ? pub_date.replaceAll("-", ".") : "전체 날짜"}
					</p>
				</button>
				<button className={country.length > 0 ? "btn-blue" : "btn-white"}>
					<p
						className={
							country.length > 0 ? "text-md text-blue" : "text-md text-unactive"
						}
					>
						{country.length > 0
							? country.length === 1
								? country[0]
								: `${country[0]} 외 ${country.length - 1}개`
							: `전체 국가`}
					</p>
				</button>
			</section>
			{isOpenModal && <FilterModal handleClose={handleModal} />}
		</>
	);
};

export default Filter;

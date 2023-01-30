import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import useModal from "../../hooks/useModal";
import FilterModal from "./FilterModal";

const Filter = () => {
	//useSelector로 필터 상태 가져와서 해당 값 있으면 색,문구
	const [isOpenModal, handleModal] = useModal(false);
	return (
		<>
			<section
				className="flex items-center h-[60px] px-5 gap-2 bg-white"
				onClick={handleModal}
			>
				<button className="flex justify-center items-center h-fit border border-gray rounded-xl gap-1 px-2">
					<Search fill="#6D6D6D" />
					<p className="text-md text-unactive">전체 헤드라인</p>
				</button>
				<button className="flex justify-center items-center h-fit border border-gray rounded-xl gap-1 px-2">
					<Calendar fill="#6D6D6D" />
					<p className="text-md text-unactive">전체 날짜</p>
				</button>
				<button className="flex justify-center items-center h-fit border border-gray rounded-xl gap-1 px-2">
					<p className="text-md text-unactive">전체 국가</p>
				</button>
			</section>
			{isOpenModal && <FilterModal handleClose={handleModal} />}
		</>
	);
};

export default Filter;

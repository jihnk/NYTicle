import { useRecoilState, useResetRecoilState } from "recoil";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import moment from "moment";
import { filterState } from "../../recoil/atom";

import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { COUNTRY_LIST } from "../../const";
import CountryItem from "../Country";
import Button from "./Button";
import Portal from "./Portal";
import usePath from "../../hooks/useLocation";

const FilterModal = ({ handleClose }: { handleClose: () => void }) => {
	const { isHome } = usePath();
	const [filter, setFilter] = useRecoilState(filterState);
	const { main, scrap } = filter;
	const reset = useResetRecoilState(filterState);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		isHome
			? setFilter({ ...filter, main: { ...main, headline: e.target.value } })
			: setFilter({ ...filter, scrap: { ...scrap, headline: e.target.value } });
	};

	const onChangeDate = (date: Date) => {
		isHome
			? setFilter({
					...filter,
					main: { ...main, pub_date: moment(date).format("YYYY-MM-DD") },
			  })
			: setFilter({
					...filter,
					scrap: { ...scrap, pub_date: moment(date).format("YYYY-MM-DD") },
			  });
	};

	const onClick = () => {
		filterList();
		handleClose();
	};

	const filterList = () => {
		if (isHome) {
			reset();
		}
	};

	return (
		<Portal>
			<div className="w-full rounded-[16px] p-5 bg-white z-50">
				<div className="flex flex-col gap-10">
					<div className="flex flex-col gap-2">
						<p className="text-base font-semibold">헤드라인</p>
						<input
							value={isHome ? main.headline : scrap.headline}
							onChange={onChange}
							placeholder="검색할 헤드라인을 입력해주세요"
							className="w-full h-10 border border-gray rounded-lg px-5 placeholder:text-gray placeholder:text-md"
						/>
					</div>
					<div className="relative">
						<p className="text-base font-semibold mb-2">날짜</p>
						<label className=" w-full">
							<DatePicker
								placeholderText="날짜를 입력해주세요"
								locale={ko}
								selected={
									isHome
										? main.pub_date
											? moment(main.pub_date.replaceAll("-", ".")).toDate()
											: null
										: scrap.pub_date
										? moment(scrap.pub_date.replaceAll("-", ".")).toDate()
										: null
								}
								onChange={onChangeDate}
								dateFormat="yyyy.MM.dd"
								className="flex justify-between items-center w-full h-10 border border-gray rounded-lg px-5  placeholder:text-gray placeholder:text-md"
							/>
							<Calendar
								fill="#6D6D6D"
								className="absolute top-[43px] right-5"
							/>
						</label>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-base font-semibold">국가</p>
						<div className="flex flex-wrap gap-[6px]">
							{COUNTRY_LIST.map((country) => (
								<CountryItem key={country.id} name={country.name} />
							))}
						</div>
					</div>
					<Button text="필터 적용하기" onClick={onClick} />
				</div>
			</div>
		</Portal>
	);
};

export default FilterModal;

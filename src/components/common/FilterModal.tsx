import { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { COUNTRY_LIST } from "../../const";
import CountryItem from "../Country";
import Button from "./Button";
import Portal from "./Portal";

const FilterModal = ({ handleClose }: { handleClose: () => void }) => {
	const [date, setDate] = useState<Date | null>(null);

	return (
		<Portal>
			<div className="w-full rounded-[16px] p-5 bg-white z-50">
				<div className="flex flex-col gap-10">
					<div className="flex flex-col gap-2">
						<p className="text-base font-semibold">헤드라인</p>
						<input
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
								selected={date}
								onChange={(date) => setDate(date)}
								dateFormat="yyyy.M.dd"
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
								<CountryItem text={country} />
							))}
						</div>
					</div>
					<Button text="필터 적용하기" onClick={handleClose} />
				</div>
			</div>
		</Portal>
	);
};

export default FilterModal;

interface CountryItemProps {
	name: string;
}
const CountryItem = ({ name }: CountryItemProps) => {
	return (
		<button className="flex flex-none justify-center items-center w-fit border border-gray rounded-[16px] gap-1 px-2 py-0.5">
			<p className="text-md text-unactive">{name}</p>
		</button>
	);
};
export default CountryItem;

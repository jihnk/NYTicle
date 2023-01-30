import { useSelector } from "react-redux";
import ArticleList from "../components/article/ArticleList";
import Filter from "../components/common/Filter";
import Nav from "../components/common/Nav";
import { Store } from "../types/store";
import NoData from "../components/NoData";

const Scrap = () => {
	const { likeList } = useSelector((state: Store) => {
		return state.like;
	});

	return (
		<>
			{likeList.length > 0 ? (
				<>
					<Filter />
					<ArticleList articleList={likeList} />
				</>
			) : (
				<NoData />
			)}

			<Nav />
		</>
	);
};
export default Scrap;

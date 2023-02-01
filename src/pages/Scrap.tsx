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

	const { scrap } = useSelector((state: Store) => {
		return state.filter;
	});

	const filteredLikeList = scrap.headline
		? likeList.filter((article) =>
				article.headline.main.includes(scrap.headline)
		  )
		: scrap.pub_date
		? likeList.filter((article) => article.pub_date.includes(scrap.pub_date))
		: likeList;

	return (
		<>
			{filteredLikeList.length > 0 ? (
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

import { useRecoilValue } from "recoil";
import ArticleList from "../components/article/ArticleList";
import Filter from "../components/common/Filter";
import Nav from "../components/common/Nav";
import NoData from "../components/NoData";
import { filterState, likeListState } from "../recoil/atom";
import { ArticleType } from "../types/article";

const Scrap = () => {
	const likeList: ArticleType[] = useRecoilValue(likeListState);

	const filter = useRecoilValue(filterState);
	const { scrap } = filter;

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
					<Filter filterData={scrap} />
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

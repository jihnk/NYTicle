import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleList from "../components/article/ArticleList";
import Filter from "../components/common/Filter";
import Nav from "../components/common/Nav";
import Spinner from "../components/common/Spinner";
import useIntersectionObserver from "../hooks/useInfiniteScroll";
import { getArticles } from "../redux/articleSlice";
import { AppDispatch } from "../redux/store";
import { Store } from "../types/store";
import { getQueryParams } from "../utils";

const Main = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	const { articleList, listCount, loading } = useSelector((state: Store) => {
		return state.article;
	});

	const { main } = useSelector((state: Store) => {
		return state.filter;
	});

	const onIntersect: IntersectionObserverCallback = async (
		[entry],
		observer
	) => {
		if (
			entry.isIntersecting &&
			!isLoading &&
			listCount >= articleList.length &&
			loading !== "failed" &&
			loading !== "pending"
		) {
			observer.unobserve(entry.target);
			setIsLoading(true);
			await dispatch(getArticles({ page, fq: getQueryParams(main) }));
			setIsLoading(false);
			setPage(page + 1);
			observer.observe(entry.target);
		}
	};

	const { setTarget } = useIntersectionObserver({
		onIntersect,
	});

	return (
		<>
			<Filter />
			<ArticleList articleList={articleList} />
			{loading === "pending" && <Spinner />}
			{!isLoading && <div ref={setTarget} className="w-full h-[300px]"></div>}
			<Nav />
		</>
	);
};
export default Main;

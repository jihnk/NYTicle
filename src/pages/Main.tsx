import { useInfiniteQuery } from "react-query";
import { useRecoilValue } from "recoil";

import { getArticleList } from "../api/article";
import ArticleList from "../components/article/ArticleList";
import Filter from "../components/common/Filter";
import Nav from "../components/common/Nav";
import Spinner from "../components/common/Spinner";
import useIntersectionObserver from "../hooks/useInfiniteScroll";
import { filterState } from "../recoil/atom";
import { getQueryParams } from "../utils";

const Main = () => {
	const filter = useRecoilValue(filterState);
	const { main } = filter;

	const fetchArticles = async (pageParam: number) => {
		const res = await getArticleList({
			page: pageParam,
			fq: getQueryParams(main),
		});
		const {
			response: { docs },
		} = res.data;
		return { docs, nextPage: pageParam + 1 };
	};

	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
	} = useInfiniteQuery(
		"articles",
		({ pageParam = 1 }) => fetchArticles(pageParam),
		{
			getNextPageParam: (lastPage, pages) => lastPage.nextPage,
		}
	);

	const onIntersect: IntersectionObserverCallback = async (
		[entry],
		observer
	) => {
		if (entry.isIntersecting && !isFetching && hasNextPage) {
			observer.unobserve(entry.target);
			await fetchNextPage();
			observer.observe(entry.target);
		}
	};

	const { setTarget } = useIntersectionObserver({
		onIntersect,
	});

	if (error) {
		return <p>Error</p>;
	}

	return (
		<>
			<Filter filterData={main} />
			<div className="mt-5">
				{data?.pages?.map((page, i) => (
					<ArticleList key={i} articleList={page?.docs} />
				))}
			</div>
			{status === "loading" || (isFetchingNextPage && <Spinner />)}
			{status !== "loading" && status !== "error" && (
				<div ref={setTarget} className="w-full h-[300px]"></div>
			)}
			<Nav />
		</>
	);
};
export default Main;

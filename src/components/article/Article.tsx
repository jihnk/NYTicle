import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/ko";

import { ArticleType } from "../../types/article";
import { toggleLike } from "../../redux/likeItemSlice";
import { Store } from "../../types/store";

import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as StarFill } from "../../assets/star-fill.svg";

interface ArticleProp {
	article: ArticleType;
}

const Article = ({ article }: ArticleProp) => {
	const dispatch = useDispatch();
	const { web_url, headline, source, byline, pub_date, _id } = article;
	const formattedDate = pub_date.split("T")[0];

	const { likeList } = useSelector((state: Store) => {
		return state.like;
	});
	const findIndex = likeList.findIndex((item: ArticleType) => item._id === _id);
	const isLiked = findIndex !== -1;

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(toggleLike(article));
	};

	return (
		<a
			href={web_url}
			className="flex flex-col w-full px-5 py-[10px] rounded-[8px] bg-background gap-2"
		>
			<div className="flex justify-between">
				<h1 className="text-lg line-clamp-2 font-semibold">{headline.main}</h1>
				<button
					className="flex justify-center items-center w-6 h-6"
					onClick={onClick}
				>
					{isLiked ? (
						<StarFill className="flex-none" />
					) : (
						<Star className="flex-none" />
					)}
				</button>
			</div>
			<div className="flex justify-between text-sm">
				<div className="flex gap-2">
					<p>{source}</p>
					{byline.person.length > 0 && (
						<p>{`${byline.person[0].firstname} 기자`}</p>
					)}
				</div>
				<p className="text-unactive">
					{moment(formattedDate).format("YYYY.M.DD. (dd)")}
				</p>
			</div>
		</a>
	);
};

export default Article;

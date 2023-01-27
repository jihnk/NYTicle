import { ArticleType } from "../../types/article";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as StarFill } from "../../assets/star-fill.svg";
import moment from "moment";
import "moment/locale/ko";

interface ArticleProp {
	article: ArticleType;
}

const Article = ({ article }: ArticleProp) => {
	const formattedDate = article.pub_date.split("T")[0];
	const { headline, source, byline } = article;

	return (
		<div className="w-full px-5 py-[10px] rounded-[8px] bg-background">
			<div className="flex justify-between">
				<h1 className="text-lg line-clamp-2 font-semibold">{headline.main}</h1>
				<div className="flex justify-center items-center w-6 h-6 ">
					{/* {isLiked ? (
						<StarFill className="flex-none" />
					) : ( */}
					<Star className="flex-none" />
					{/* )} */}
				</div>
			</div>
			<div className="flex justify-between text-sm">
				<div className="flex gap-2">
					<p>{source}</p>
					{byline.original ? <p>{`${byline.original} 기자`}</p> : <></>}
				</div>
				<p className="text-unactive">
					{moment(formattedDate).format("YYYY.M.DD. (dd)")}
				</p>
			</div>
		</div>
	);
};

export default Article;

import { ArticleType } from "./article";
import { FilterType } from "./filter";

interface Store {
	article: {
		articleList: ArticleType[];
		loading: string;
		listCount: number;
	};
	like: {
		likeList: ArticleType[];
	};
	filter: {
		main: FilterType;
		scrap: FilterType;
	};
}

export type { Store };

import { ArticleType } from "./article";

interface Store {
	article: {
		articleList: ArticleType[];
		loading: string;
		listCount: number;
	};
	like: {
		likeList: ArticleType[];
	};
}

export type { Store };

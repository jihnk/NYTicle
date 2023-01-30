import { ArticleType } from "./article";

interface Store {
	article: {
		articleList: ArticleType[];
		loading: boolean;
	};
	like: {
		likeList: ArticleType[];
	};
}

export type { Store };

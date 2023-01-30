import { ArticleType } from "./types/article";

export const removeItem = (arr: ArticleType[], index: number) => {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

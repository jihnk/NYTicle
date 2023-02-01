import { ArticleType } from "./types/article";
import { FilterType } from "./types/filter";

export const removeItem = (arr: ArticleType[], index: number) => {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export const getQueryParams = (obj: FilterType) => {
	let returnQueryParams = [];
	for (const key of Object.keys(obj)) {
		if (obj[key]) {
			returnQueryParams.push(key + ":" + obj[key]);
		}
	}

	return returnQueryParams.join(" AND ");
};

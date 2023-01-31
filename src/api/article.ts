import axios from "axios";
import { MutableRefObject } from "react";

const instance = axios.create({
	baseURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
});

const API_KEY = process.env.REACT_APP_API_KEY;

interface fetchType {
	page: MutableRefObject<number>;
}

export const getArticleList = async ({ page }: fetchType) => {
	try {
		const response = await instance.get(`/`, {
			params: {
				page,
				"api-key": API_KEY,
			},
		});
		return response.data;
	} catch (error) {}
};

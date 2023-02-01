import axios from "axios";
import { MutableRefObject } from "react";

const instance = axios.create({
	baseURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
});

const API_KEY = process.env.REACT_APP_API_KEY;

interface fetchType {
	page: MutableRefObject<number>;
	fq: string;
}

export const getArticleList = async ({ page, fq }: fetchType) => {
	try {
		const response = await instance.get(`/`, {
			params: {
				page,
				fq,
				"api-key": API_KEY,
			},
		});
		return response.data;
	} catch (error) {}
};

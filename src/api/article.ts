import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
});

export const API_KEY = process.env.REACT_APP_API_KEY;

interface fetchType {
	page: number;
	fq: string;
}

export const getArticleList = async ({ page, fq }: fetchType) => {
	try {
		const res = await instance.get(`/`, {
			params: {
				page,
				fq,
				"api-key": API_KEY,
			},
		});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

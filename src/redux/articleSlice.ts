import { getArticleList } from "../api/article";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getArticles = createAsyncThunk(
	"articles/getArticles",
	async ({ page }: any) => {
		const response = await getArticleList({ page });
		return response.data.response.docs;
	}
);

export const articleSlice = createSlice({
	name: "articles",
	initialState: { articleList: [], loading: "idle" },
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getArticles.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(getArticles.fulfilled, (state, action) => {
			state.loading = "succeed";
			state.articleList = action.payload;
		});
		builder.addCase(getArticles.rejected, (state, action) => {
			state.loading = "failed";
		});
	},
});

export default articleSlice.reducer;

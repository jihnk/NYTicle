import { getArticleList } from "../api/article";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getArticles = createAsyncThunk(
	"articles/getArticles",
	async ({ page }: any, thunkAPI) => {
		try {
			const result = await getArticleList({ page });
			return result.response;
		} catch (err) {
			if (err instanceof AxiosError) {
				const message =
					(err.response && err.response.data && err.response.data.message) ||
					err.message ||
					err.toString();
				return thunkAPI.rejectWithValue(message);
			}
		}
	}
);

export const articleSlice = createSlice({
	name: "articles",
	initialState: { articleList: [], loading: "idle", listCount: 0 },
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getArticles.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(getArticles.fulfilled, (state, action) => {
			state.loading = "succeed";
			state.articleList = [...state.articleList].concat(action.payload.docs);
			state.listCount = action.payload.meta.hits;
		});
		builder.addCase(getArticles.rejected, (state, action) => {
			state.loading = "failed";
		});
	},
});

export default articleSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { ArticleType } from "../types/article";
import { removeItem } from "../utils";

interface likeListState {
	likeList: ArticleType[];
}

const initialState: likeListState = { likeList: [] };

export const likeSlice = createSlice({
	name: "like",
	initialState,
	reducers: {
		toggleLike: (state, action) => {
			const newItem = action.payload;
			const findIndex = state.likeList.findIndex(
				(item: ArticleType) => item._id === newItem._id
			);
			if (findIndex === -1) {
				state.likeList.push({ ...newItem });
			} else {
				const newList = removeItem(state.likeList, findIndex);
				state.likeList = newList;
			}
		},
	},
});

export const { toggleLike } = likeSlice.actions;

export default likeSlice.reducer;

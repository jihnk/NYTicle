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
				alert("스크랩 되었습니다.");
			} else {
				const newList = removeItem(state.likeList, findIndex);
				state.likeList = newList;
				alert("스크랩에서 제거었습니다.");
			}
		},
	},
});

export const { toggleLike } = likeSlice.actions;

export default likeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	main: {
		headline: "",
		pub_date: "",
	},
	scrap: {
		headline: "",
		pub_date: "",
	},
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		editMainHeadline: (state, action) => {
			state.main = { ...state.main, headline: action.payload };
		},
		editMainDate: (state, action) => {
			state.main = { ...state.main, pub_date: action.payload };
		},
		editScrapHeadline: (state, action) => {
			state.scrap = { ...state.scrap, headline: action.payload };
		},
		editScrapDate: (state, action) => {
			state.scrap = { ...state.scrap, pub_date: action.payload };
		},
	},
});

export const {
	editMainHeadline,
	editMainDate,
	editScrapHeadline,
	editScrapDate,
} = filterSlice.actions;

export default filterSlice.reducer;

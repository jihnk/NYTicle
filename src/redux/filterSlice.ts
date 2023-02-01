import { createSlice } from "@reduxjs/toolkit";
import { FilterType } from "../types/filter";

const initialState: { main: FilterType; scrap: FilterType } = {
	main: {
		headline: "",
		pub_date: "",
		country: [],
	},
	scrap: {
		headline: "",
		pub_date: "",
		country: [],
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
		editMainCountry: (state, action) => {
			const newItem = action.payload;
			state.main.country.includes(newItem)
				? state.main.country.filter((country) => country !== newItem)
				: state.main.country.push(newItem);
		},
		editScrapHeadline: (state, action) => {
			state.scrap = { ...state.scrap, headline: action.payload };
		},
		editScrapDate: (state, action) => {
			state.scrap = { ...state.scrap, pub_date: action.payload };
		},
		editScrapCountry: (state, action) => {
			console.log(state);
			state.scrap.country.includes(action.payload)
				? (state.scrap.country = [
						...state.scrap.country.filter(
							(country) => country !== action.payload
						),
				  ])
				: state.scrap.country.push(action.payload);
			console.log(state.scrap);
		},
	},
});

export const {
	editMainHeadline,
	editMainDate,
	editMainCountry,
	editScrapHeadline,
	editScrapDate,
	editScrapCountry,
} = filterSlice.actions;

export default filterSlice.reducer;

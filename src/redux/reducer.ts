import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import like from "./likeItemSlice";
import article from "./articleSlice";
import filter from "./filterSlice";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["like"],
};

const rootReducer = combineReducers({
	like,
	article,
	filter,
});

export default persistReducer(persistConfig, rootReducer);

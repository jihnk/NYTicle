import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { FilterType } from "../types/filter";

const { persistAtom } = recoilPersist();

const likeListState = atom({
	key: "like",
	default: [],
	effects_UNSTABLE: [persistAtom],
});

const filterState = atom<{ main: FilterType; scrap: FilterType }>({
	key: "filterState",
	default: {
		main: { headline: "", pub_date: "", country: [] },
		scrap: { headline: "", pub_date: "", country: [] },
	},
});

export { likeListState, filterState };

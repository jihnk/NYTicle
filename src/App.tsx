import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./pages/Main";
import Scrap from "./pages/Scrap";
import "./styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/scrap" element={<Scrap />}></Route>
					</Routes>
				</BrowserRouter>
			</RecoilRoot>
		</QueryClientProvider>
	);
}

export default App;

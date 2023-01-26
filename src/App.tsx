import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Scrap from "./pages/Scrap";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/scrap" element={<Scrap />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

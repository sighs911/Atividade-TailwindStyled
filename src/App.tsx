import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Tailwind from "./screens/Tailwind/Tailwind";
import Styled from "./screens/Styled/Styled";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Tailwind />} />
					<Route path="styled" element={<Styled />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

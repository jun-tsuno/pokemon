import ShowPage from "./pages/ShowPage";
import generations from "./data/generations";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";

function App() {
	const newGenArr = [...generations];
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route
							index
							element={
								<ShowPage
									limit={generations[0].limit}
									offset={generations[0].offset}
								/>
							}
						/>
						{newGenArr.splice(1).map(({ id, limit, offset, link }) => {
							console.log(link);
							return (
								<Route
									key={id}
									path={link}
									element={<ShowPage limit={limit} offset={offset} />}
								/>
							);
						})}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

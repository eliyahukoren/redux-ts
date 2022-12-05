import React from "react";
import RepositoriesList from "../repositories-list/RepositoriesList";
import { Provider } from "react-redux";
import { store } from "../../state";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<div className="container">
				<RepositoriesList />
			</div>
		</Provider>
	);
};
export default App;

import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store = createStore(
	reducers, 							// our reducers
	{}, 									// initial state
	applyMiddleware(thunk)			// middlewares
);

import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const stote = createStore(
	reducers, 							// our reducers
	{}, 									// initial state
	applyMiddleware(thunk)			// middlewares
);

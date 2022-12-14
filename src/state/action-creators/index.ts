import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const url = "https://registry.npmjs.org/-/v1/search";

export const searchRepositories = (text: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES,
		});

		try {

			const { data } = await axios.get(url, {
				params: { text },
			});

			if( data?.objects ){
				const names = data.objects.map((result: any) => {
					return result.package.name
				});

				dispatch({
					type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
					payload: names
				});
			}

		} catch (err) {
			if (err instanceof Error) {
				dispatch({
					type: ActionType.SEARCH_REPOSITORIES_ERROR,
					payload: err.message,
				});
			}
		}
	};
};

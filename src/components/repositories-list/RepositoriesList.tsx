import { useRef, useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
	const refTerm = useRef<HTMLInputElement>(null);
	const [displayText, setDisplayText ] = useState('');
	const { searchRepositories } = useActions();
	const { data, loading, error } = useTypedSelector(
		(state) => state.repositories
	);
	const [showNotFound, setShowNotFound] = useState(false);

	useEffect(() => {
		if (refTerm.current) {
			refTerm.current.focus();
		}
	}, []);

	useEffect(()=>{
		setShowNotFound(!loading && !error && data.length === 0 && displayText !== '')
	}, [data, loading, error, displayText])

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (refTerm.current?.value) {
			const text = refTerm.current?.value;
			searchRepositories(text);
		}
	};

	return (
		<div className="row justify-content-center my-auto mt-5">
			<div className="col-sm-6">
				<form onSubmit={onSubmit}>
					<div className="card text-center shadow-lg">
						<div className="card-body">
							<h5 className="card-title">Search for a repository</h5>

							<p className="card-text">
								Simple Redux typescript application for search npm
								packages <strong>{displayText}</strong>
							</p>

							{error ? (
								<div className="alert alert-danger mb-3" role="alert">
									{error}
								</div>
							) : null}

							{loading ? (
								<div
									className="spinner-border text-info mb-3"
									role="status"
								>
									<span className="visually-hidden">Loading...</span>
								</div>
							) : null}

							<input
								ref={refTerm}
								onChange={(e) => {setDisplayText(e.target.value); setShowNotFound(false);}}
								type="text"
								className="form-control mb-3"
								placeholder="Type package name"
							/>

							<button className="btn btn-primary mb-3">Search</button>

							{!loading && !error && data.length !== 0 ? (
								<ul className="list-group text-start mb-3">
									{data.map((item, index) => (
										<li key={index} className="list-group-item">
											{item}
										</li>
									))}
								</ul>
							) : null}

							{ showNotFound ? (
								<div className="alert alert-primary" role="alert">
									Not found packages <strong>{displayText}</strong>
								</div>
							) : null}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RepositoriesList;

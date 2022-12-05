const RepositoriesList:React.FC = () => {
	return (
		<div className="row justify-content-center my-auto mt-5">
			<div className="col-sm-6">
				<form>
					<div className="card text-center shadow-lg">
						<div className="card-body">
							<h5 className="card-title">Search for a repository</h5>

							<p className="card-text">
								Simple Redux typescript application for search npm
								packages
							</p>

							<input
								type="text"
								className="form-control mb-3"
								placeholder="Type package name"
							/>

							<ul className="list-group text-start mb-3">
								<li className="list-group-item">package 1</li>
								<li className="list-group-item">package 1</li>
								<li className="list-group-item">package 1</li>
							</ul>

							<button className="btn btn-primary">Search</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default RepositoriesList;

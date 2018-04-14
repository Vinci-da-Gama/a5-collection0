export class DoAuthService {
	isLoggedIn = false;

	isAuthenticated() {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.isLoggedIn);
			}, 800);
		});
		return promise;
	};

	doLoggedIn() {
		this.isLoggedIn = true;
	}

	doLoggedOut() {
		this.isLoggedIn = false;
	}

}

export const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST(body) {
	return {
		url: API_URL + "/jwt-auth/v1/token",
		options: {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		},
	};
}

export function TOKEN_VALIDATE(token) {
	return {
		url: API_URL + "/jwt-auth/v1/token/validate",
		options: {
			method: "POST",
			headers: {
				Authorization: "Bearer " + token,
			},
		},
	};
}

export function GET_USER(token) {
	return {
		url: API_URL + "/api/user",
		options: {
			method: "GET",
			headers: {
				Authorization: "Bearer " + token,
			},
		},
	};
}

export function GET_PHOTOS({ page, total, user }) {
	return {
		url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
		options: {
			method: "GET",
			cache: "no-store",
		},
	};
}

export function GET_PHOTO(id) {
	return {
		url: `${API_URL}/api/photo/${id}`,
		options: {
			method: "GET",
			cache: "no-store",
		},
	};
}

export function POST_USER(body) {
	return {
		url: API_URL + "/api/user",
		options: {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		},
	};
}

export function POST_PHOTO(formData, token) {
	return {
		url: API_URL + "/api/photo",
		options: {
			method: "POST",
			headers: {
				Authorization: "Bearer " + token,
			},
			body: formData,
		},
	};
}

export function DELETE_PHOTO(id) {
	return {
		url: `${API_URL}/api/photo/${id}`,
		options: {
			method: "DELETE",
			headers: {
				Authorization: "Bearer " + window.localStorage.getItem("TOKEN"),
			},
		},
	};
}

export function POST_COMMENT(id, body) {
	return {
		url: `${API_URL}/api/comment/${id}`,
		options: {
			method: "POST",

			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + window.localStorage.getItem("TOKEN"),
			},

			body: JSON.stringify(body),
		},
	};
}

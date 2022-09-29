class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  set setHeadersAuthorization(token) {
    this._headers.authorization = `Bearer ${token}`;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка, статус: ${res.status}`);
  }

  _getToken() {
    if (localStorage.getItem('token')) {
      this.setHeadersAuthorization = localStorage.getItem('token');
    }
  }

  signUp(name, email, password) {
    const body = JSON.stringify({
      name,
      email,
      password,
    });
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: body,
    }).then(this._checkRes);
  }

  signIn(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._checkRes);
  }

  checkUser(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: { ...this._headers, authorization: `Bearer ${token}` },
    }).then(this._checkRes);
  }

  setUser(name, email) {
    this._getToken();
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkRes);
  }

  getSavedMovies() {
    this._getToken();
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkRes);
  }

  saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  }) {
    if (!country) country = 'default';
    if (!director) director = 'default';
    if (!duration && duration !== 0) duration = 999;
    if (!year) year = 'default';
    if (!description) description = 'default';
    if (!image)
      image =
        'https://avatars.mds.yandex.net/i?id=2322bdf7a353af954cbaf003d2856977-5099821-images-thumbs&n=13';
    if (!trailerLink)
      trailerLink =
        'https://avatars.mds.yandex.net/i?id=2322bdf7a353af954cbaf003d2856977-5099821-images-thumbs&n=13';
    if (!nameRU) nameRU = 'default';
    if (!nameEN) nameEN = 'default';
    if (!thumbnail)
      thumbnail =
        'https://avatars.mds.yandex.net/i?id=2322bdf7a353af954cbaf003d2856977-5099821-images-thumbs&n=13';
    if (!movieId && movieId !== 0) movieId = 999;

    this._getToken();
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      }),
    }).then(this._checkRes);
  }

  unsaveMovie(id) {
    this._getToken();
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkRes);
  }
}

export const mainApi = new MainApi({
  baseUrl: 'https://movies-explorer-api-ntta.onrender.com',
  // baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    authorization: 'Bearer ',
  },
});

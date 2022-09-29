class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка, статус: ${res.status}`);
  }

  getMovie() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
    }).then(this._checkRes);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

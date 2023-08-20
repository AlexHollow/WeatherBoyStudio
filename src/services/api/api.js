export class Api {
  _handleServerResponce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getData(city) {
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=fb96b9da144f4eb99d4173845231708&q=${city}&days=5`)
      .then(res => this._handleServerResponce(res))
  }
}
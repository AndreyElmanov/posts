const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor({ baseUrl, token }) {
    this._baseUrl = baseUrl;
    this._token = `Bearer ${token}`;
  }

  getPostsList() {
    return fetch(`${this._baseUrl}/posts`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(onResponse)
      .catch((err) => {
        alert(err);
      });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(onResponse)
      .catch((err) => {
        alert(err)
      });
  }

  getPostById(postID) {
    return fetch(`${this._baseUrl}/posts/${postID}`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(onResponse)
      .catch((err) => {
        alert(err);
      });
  }

  changeLikeStatus(postID, isLike) {
    return fetch(`${this._baseUrl}/posts/likes/${postID}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: {
        authorization: this._token,
      },
    })
      .then(onResponse)
      .catch((err) => {
        alert(err);
      });
  }

  deletePost(postID) {
    return fetch(`${this._baseUrl}/posts/${postID}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    })
      .then(onResponse)
      .catch((err) => {
        alert(err);
      });
  }

  addPost(newPost) {
    return fetch(`${this._baseUrl}/posts`, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
    })
      .then(onResponse)
      .catch((err) => {
        alert(err);
      });
  }

  updatePost(updateNewPost, postID) {
    return fetch(`${this._baseUrl}/posts/${postID}`, {
      method: "PATCH",
      body: JSON.stringify(updateNewPost),
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
    })
      .then(onResponse)
      .catch((err) => {
        alert(err);
      });
  }
}

const config = {
  baseUrl: "https://api.react-learning.ru",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYzkiLCJpYXQiOjE2NDcwMTM4ODcsImV4cCI6MTY3ODU0OTg4N30.ACyaoPWVOGyAJGyNJgiqHltMdeZepL7lT40XolpEQxw",
};

const api = new Api(config);

export default api;

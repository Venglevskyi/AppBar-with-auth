const baseUrl = "https://jsonplaceholder.typicode.com";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const fetchNews = () => {
  return fetch(baseUrl + "/posts", { options }).then((response) =>
    response.json()
  );
};

const fetchNewsById = (newsId) => {
  return fetch(`${baseUrl}/posts/${newsId}`, { options }).then((response) =>
    response.json()
  );
};

const fetchCommentsById = (newsId) => {
  return fetch(`${baseUrl}/posts/${newsId}/comments`, {
    options,
  }).then((response) => response.json());
};

const fetchUser = () => {
  return fetch(`${baseUrl}/users`, {
    options,
  }).then((response) => response.json());
};

export { fetchNews, fetchNewsById, fetchCommentsById, fetchUser };

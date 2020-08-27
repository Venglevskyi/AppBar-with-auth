import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchNews } from "../../services/api";
import {
  newsCard,
  newsCard__title,
  newsCard__description,
  container,
} from "./news.module.css";

const News = ({ match }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchNews()
      .then((data) => setPosts(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main>
      <div className={container}>
        {posts.map(({ title, body, id }) => (
          <article key={id} className={newsCard}>
            <h2 className={newsCard__title}>{title}</h2>
            <p className={newsCard__description}>{body}</p>
            <Link to={`${match.url}/${id}`}>
              <p>Details</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
};

export default News;

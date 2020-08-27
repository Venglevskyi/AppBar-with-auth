import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";

import Comments from "../../Components/Comments/Comments";
import { fetchNewsById } from "../../services/api";
import { newsCard } from "./newsDetails.module.css";

const NewsDetails = ({ match, location }) => {
  const { postsId } = match.params;
  const [post, setPost] = useState({});
  useEffect(() => {
    fetchNewsById(postsId)
      .then((data) => setPost(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main>
      <article className={newsCard}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
      <Link to={`${match.url}/comments`}>Comments</Link>
      <Route path={`${match.path}/comments`} component={Comments}></Route>
    </main>
  );
};

export default NewsDetails;

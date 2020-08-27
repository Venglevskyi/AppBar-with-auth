import React, { useState, useEffect } from "react";

import { fetchCommentsById, fetchUser } from "../../services/api";

const styles = {
  maxWidth: 1200,
  border: "1px solid black",
  marginBottom: 6,
  paddingLeft: 4,
};

const Comments = ({ match }) => {
  const { postsId } = match.params;
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchCommentsById(postsId)
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
    fetchUser().then((data) => setUsers(data));
  }, []);
  return (
    <>
      {comments.map(({ postId, id, body }) => (
        <div style={styles} key={id}>
          {users
            .filter((user) => user.id === id)
            .map((user) => (
              <p key={id}>{`User: ${user.name}`}</p>
            ))}
          <p>{`PostId: ${postId}`}</p>
          <p>{`Comments: ${body}`}</p>
        </div>
      ))}
    </>
  );
};

export default Comments;

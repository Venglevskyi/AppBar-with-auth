import React, { useState, useEffect } from "react";

import { fetchCommentsById, fetchUser } from "../../services/api";

const styles = {
  width: 1200,
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: 4,
  margin: "0px auto 6px",
};

const Comments = ({ match }) => {
  const { postsId } = match.params;
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchCommentsById(postsId)
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
    fetchUser().then((users) => setUsers(users));
  }, []);

  return (
    <>
      {comments.map(({ postId, id, body }) => (
        <div style={styles}>
          {users &&
            users
              .filter((user) => user.id === id)
              .map((user) => (
                <p
                  style={{ paddingLeft: 6 }}
                  key={id}
                >{`User: ${user.name}`}</p>
              ))}
          <p style={{ paddingLeft: 6 }}>{`PostId: ${postId}`}</p>
          <p style={{ paddingLeft: 6 }}>{`Comments: ${body}`}</p>
        </div>
      ))}
    </>
  );
};

export default Comments;

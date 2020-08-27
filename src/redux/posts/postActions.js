const addPost = (title, text) => ({
  type: "post/add",
  payload: { task: { title, text } },
});

const removePost = (postId) => ({
  type: "post/delete",
  payload: {
    postId,
  },
});

const updatePost = (postId) => ({
  type: "post/update",
  payload: {
    postId,
  },
});

export { addPost, removePost, updatePost };

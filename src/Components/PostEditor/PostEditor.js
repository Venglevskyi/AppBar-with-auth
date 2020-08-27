import React, { Component } from "react";

class PostEditor extends Component {
  state = {
    title: "",
    text: "",
  };

  render() {
    const { title, text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input
            // className={styles.FormInput}
            type="text"
            value={title}
            onChange={this.handleChange}
            name="name"
          />
        </label>
        <label>
          Text
          <input
            // className={styles.FormInput}
            type="text"
            value={text}
            onChange={this.handleChange}
            name="number"
          />
        </label>
        <button type="submit">Add post</button>
      </form>
    );
  }
}

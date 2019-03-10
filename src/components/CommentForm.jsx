import React, { Component } from "react";

const styles = {
  form: {
    margin: "auto",
    padding: "0px",
    width: "500px"
  },
  commentBox: {
    width: "494px",
    height: "80px",
    marginBottom: "12px"
  },
  inputField: {
    width: "360px",
    float: "right"
  },
  button: {
    marginTop: "12px",
    width: "500px",
    color: "#ffffff",
    backgroundColor: "#767676",
    padding: "6px",
    borderRadius: "8px"
  }
};

export default class CommentForm extends Component {
  state = {
    comment: "",
    author: ""
  };

  handleOnChange = ({ target: { name, value } }) =>
    this.setState(_prevState => ({
      [name]: value
    }));

  hasInvalidFields = () => {
    const { comment, author } = this.state;
    if (comment.trim() !== "" && author.trim() !== "") {
      return false;
    }
    return true;
  };

  render() {
    const { comment, author } = this.state;
    const isDisabled = this.hasInvalidFields() ? true : null;
    return (
      <form data-testid="comment-form" style={styles.form}>
        <div>
          <textarea
            placeholder="Write something..."
            name="comment"
            value={comment}
            onChange={this.handleOnChange}
            style={styles.commentBox}
          />
        </div>
        <div>
          <label htmlFor="author" aria-labelledby="author">
            Your Name
          </label>
          <input
            id="author"
            type="text"
            name="author"
            value={author}
            onChange={this.handleOnChange}
            style={styles.inputField}
          />
        </div>
        <button disabled={isDisabled} style={styles.button}>
          Add Comment
        </button>
      </form>
    );
  }
}

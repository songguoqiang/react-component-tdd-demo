import React, { Component } from "react";

export default class CommentForm extends Component {
  render() {
    return (
      <form>
        <div>
          <textarea placeholder="Write something..." name="comment" />
        </div>
        <div>
          <label htmlFor="author" aria-labelledby="author">
            Your Name
          </label>
          <input id="author" type="text" name="author" />
        </div>
        <button>Add Comment</button>
      </form>
    );
  }
}

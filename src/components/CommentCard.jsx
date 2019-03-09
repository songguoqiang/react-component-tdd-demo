import React from "react";
import PropTypes from "prop-types";

export default function CommentCard({ comment, author }) {
  return (
    <div>
      <p>{comment}</p>
      <p>- {author}</p>
    </div>
  );
}

CommentCard.propTypes = {
  author: PropTypes.string
};

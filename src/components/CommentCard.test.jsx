import React from "react";
import { render } from "react-testing-library";
import CommentCard from "./CommentCard";
import { expectPropTypeCheckToFail } from "./testHelper";

describe("Comment Card", () => {
  test("should render the comment and the author", () => {
    // Arrange
    const props = {
      comment: "React Testing Library is great",
      author: "Luke Ghenco"
    };

    // Act
    const { getByText } = render(<CommentCard {...props} />);

    // Assert
    const commentNode = getByText(props.comment);
    const authorTagNode = getByText(`- ${props.author}`);

    expect(commentNode).toBeDefined();
    expect(authorTagNode).toBeDefined();
  });

  test("comment prop should be a string", () => {
    // Arrange
    const propsWithWrongCommentType = {
      comment: true,
      author: "Luke Ghenco"
    };

    // Act
    expectPropTypeCheckToFail(() =>
      render(<CommentCard {...propsWithWrongCommentType} />)
    );
  });

  test("comment prop is required", () => {
    // Arrange
    const propsWithoutComment = {
      author: "Luke Ghenco"
    };

    // Act
    expectPropTypeCheckToFail(() =>
      render(<CommentCard {...propsWithoutComment} />)
    );
  });

  test("author prop should be string", () => {
    // Arrange
    const propsWithWrongAuthorType = {
      comment: "React Testing Library is great",
      author: true
    };

    // Act
    expectPropTypeCheckToFail(() =>
      render(<CommentCard {...propsWithWrongAuthorType} />)
    );
  });

  test("author props is required", () => {
    // Arrange
    const propsWithoutAuthor = {
      comment: "React Testing Library is great"
    };

    // Act
    expectPropTypeCheckToFail(() =>
      render(<CommentCard {...propsWithoutAuthor} />)
    );
  });
});

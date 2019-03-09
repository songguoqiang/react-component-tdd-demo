import React from "react";
import { render } from "react-testing-library";
import CommentCard from "./CommentCard";

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

  test("should throw error when author is not a string", () => {
    // Arrange
    const propsWithWrongAuthorType = {
      comment: "React Testing Library is great",
      author: true
    };

    // Act
    expect(() =>
      render(<CommentCard {...propsWithWrongAuthorType} />)
    ).toThrowError();
  });

  test("should throw error when author is not given", () => {
    // Arrange
    const propsWithoutAuthor = {
      comment: "React Testing Library is great"
    };

    // Act
    expect(() =>
      render(<CommentCard {...propsWithoutAuthor} />)
    ).toThrowError();
  });
});

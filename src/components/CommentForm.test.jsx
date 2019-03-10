import React from "react";
import { render } from "react-testing-library";
import CommentForm from "./CommentForm";

describe("Comment Form", () => {
  test("should render the form with input fields for author, command and a submit button", () => {
    // Act
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <CommentForm />
    );

    // Assert
    const commentTextfieldNode = getByPlaceholderText("Write something...");
    const nameFieldNode = getByLabelText("Your Name");
    const submitButton = getByText("Add Comment");

    expect(commentTextfieldNode).toBeDefined();
    expect(nameFieldNode).toBeDefined();
    expect(submitButton).toBeDefined();
  });
});

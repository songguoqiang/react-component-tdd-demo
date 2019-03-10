import React from "react";
import { render, fireEvent } from "react-testing-library";
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

    const form = document.querySelector('[data-testid="comment-form"]');
    expect(form).toHaveFormValues({
      author: "",
      comment: ""
    });
    expect(submitButton).toBeDisabled();
  });

  test("when user fills in comment and name, the submit button is enabled", () => {
    // Arrange
    const comment = "Never put off until tomorrow what can be done today.";
    const author = "Sensei Wu";

    // Act
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <CommentForm />
    );
    const commentTextfieldNode = getByPlaceholderText("Write something...");
    fireEvent.change(commentTextfieldNode, { target: { value: comment } });

    const nameFieldNode = getByLabelText("Your Name");
    fireEvent.change(nameFieldNode, { target: { value: author } });

    // Assert
    const form = document.querySelector('[data-testid="comment-form"]');
    expect(form).toHaveFormValues({
      author,
      comment
    });

    const submitButton = getByText("Add Comment");
    expect(submitButton).not.toBeDisabled();
  });
});

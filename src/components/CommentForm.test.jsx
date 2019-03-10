import React from "react";
import { render, fireEvent, wait } from "react-testing-library";
import CommentForm from "./CommentForm";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

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

    checkTheFormIsEmpty();
    expect(submitButton).toBeDisabled();
  });

  test("when user fills in comment and name, the submit button is enabled", () => {
    // Arrange
    const newComment = {
      comment: "Never put off until tomorrow what can be done today.",
      author: "Sensei Wu"
    };

    // Act
    const dom = render(<CommentForm />);
    fillComment(dom, newComment);

    // Assert
    const form = document.querySelector('[data-testid="comment-form"]');
    expect(form).toHaveFormValues(newComment);

    const submitButton = dom.getByText("Add Comment");
    expect(submitButton).not.toBeDisabled();
  });

  test("when user hits submit button, the comment is passed to the addComment callback, and the form is reset", async () => {
    // Arrange
    const newComment = {
      comment: "Never put off until tomorrow what can be done today.",
      author: "Sensei Wu"
    };

    let mock = new MockAdapter(axios);
    mock.onPost("/api/comments").reply(200, newComment);

    const addComment = jest.fn();

    // Act
    const dom = render(<CommentForm addComment={addComment} />);
    fillComment(dom, newComment);

    const submitButton = dom.getByText("Add Comment");
    fireEvent.click(submitButton);

    // Assert
    await wait(() => {
      expect(addComment).toBeCalledWith(newComment);
    });
    checkTheFormIsEmpty();
  });
});

function checkTheFormIsEmpty() {
  const form = document.querySelector('[data-testid="comment-form"]');
  expect(form).toHaveFormValues({
    author: "",
    comment: ""
  });
}

function fillComment(dom, newComment) {
  const { getByLabelText, getByPlaceholderText } = dom;
  const { comment, author } = newComment;

  const commentTextfieldNode = getByPlaceholderText("Write something...");
  fireEvent.change(commentTextfieldNode, { target: { value: comment } });

  const nameFieldNode = getByLabelText("Your Name");
  fireEvent.change(nameFieldNode, { target: { value: author } });
}

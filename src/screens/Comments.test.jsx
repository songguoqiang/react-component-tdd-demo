import React from "react";
import { render, fireEvent, wait, cleanup } from "react-testing-library";
import axios from "axios";
import Comments from "./Comments";
import { comments } from "../testData";

describe("Comments Screen", () => {
  let originalGet;
  beforeEach(() => {
    originalGet = axios.get;
    axios.get = jest.fn(() => Promise.resolve(comments));
  });

  afterEach(() => {
    axios.get = originalGet;
  });

  test("It fetches comments and renders them to the page", async () => {

    // Arrange
    const comment1 = comments[0];
    const comment2 = comments[1];

    // Act
    const { getByText } = render(<Comments />);
    await wait(() => getByText(comment1.comment));

    // Assert
    const firstCommentNode = getByText(comment1.comment);
    const firstAuthorTagNode = getByText(`- ${comment1.author}`);
    const secondCommentNode = getByText(comment2.comment);
    const secondAuthorTagNode = getByText(`- ${comment2.author}`);

    expect(firstCommentNode).toBeDefined();
    expect(firstAuthorTagNode).toBeDefined();
    expect(secondCommentNode).toBeDefined();
    expect(secondAuthorTagNode).toBeDefined();
  });
});

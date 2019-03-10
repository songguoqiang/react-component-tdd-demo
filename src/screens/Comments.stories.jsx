import React from "react";
import { storiesOf } from "@storybook/react";
import Comments from "./Comments";

import { comments } from "../testData";
import { mockAxios } from "../testHelper";
const newComment = {
  id: 3,
  comment: "Brave new world of testing",
  author: "Spongebob"
};

mockAxios.onGet("/api/comments").reply(200, comments);
mockAxios.onPost("/api/comments").reply(200, newComment);

storiesOf("Comments", module).add("default", () => <Comments />);

import React from "react";
import s from "./styles.module.css";
import { postData } from "../../posts";

import { Post } from "../Post";

export const PostList = () => {
  return (
    <div className={s.cards}>
      {postData.map((post) => {
        return <Post key={post._id} {...post} />;
      })}
    </div>
  );
};
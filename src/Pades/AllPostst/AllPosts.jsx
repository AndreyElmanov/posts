import React from "react";
import { PostList } from "../../components/PostList";

export const AllPosts = ({
  posts,
  handlePostLike,
  handleDeletePost,
  handleUpdatePost,
  setPosts
}) => {
  return (
    <>
      <div className="content_posts">
        <PostList
          posts={posts}
          handlePostLike={handlePostLike}
          handleDeletePost={handleDeletePost}
          handleUpdatePost={handleUpdatePost}
          setPosts={setPosts}
        />
      </div>
    </>
  );
};

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import s from "./styles.module.css";
import { useForm } from "react-hook-form";
import api from "../../utils/Api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

export default function UpdateModal({setPosts, post_id, posttitle, postimage, posttext, posttags}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  function onSubmit(newPost) {
    const newTags = newPost.tags.split(",").map(tag => tag.trim()).filter(tag => tag !== "");
    const updatedPost = {
      title: newPost.title ? newPost.title : posttitle,
      image: newPost.image ? newPost.image : postimage,
      text: newPost.text ? newPost.text : posttext,
      tags: newPost.tags ? newTags : posttags
    }

    api.updatePost(updatedPost, post_id)
      .then(() => {
        api.getPostsList().then((newPosts) => {
          setPosts(newPosts);
        });
      });
    setOpen(false);
  }

  return (
    <div className={s.updatePost_div}>
      <Button onClick={handleOpen}>Редактировать пост</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <h3>Мой пост</h3>
            <input
              type="text"
              {...register("title")}
              defaultValue={posttitle}
              placeholder={posttitle}
            />
            <input
              type="text"
              {...register("image")}
              defaultValue={postimage}
              placeholder={postimage}
            />
            <input 
                type="text"
                {...register('tags')}
                defaultValue={posttags}
                placeholder={posttags ? `${posttags} (Теги пишем через ',')` : "Теги пишем через ','"}
             />
            <textarea
              type="text"
              {...register("text")}
              defaultValue={posttext}
              placeholder={posttext}
            />
            <button>Изменить пост</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

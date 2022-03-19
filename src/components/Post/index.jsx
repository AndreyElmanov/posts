import React from "react";
import { Card } from 'antd';
import "./styles.css";
import dayjs from 'dayjs';
// var dayjs = require('dayjs');
// dayjs().format();

export const Post = ({title, image, tags, text, created_at, updated_at, author: {name, about, email, avatar}}) => {
  let postDate = dayjs({created_at}).format('dddd HH:mm DD/MM/YYYY');
    return (
      <div className="site-card-border-less-wrapper card">
        <Card bordered={false}>
          <div className="title">
            <b>{title}</b>
          </div>
          <div className="user_info">
            <img className="avatar" src={avatar} alt="img" />
            <div className="user">
              <b>{name}</b>
              <a>{about}</a>
              <b>{email}</b>
            </div>
          </div>
          <img src={image} alt="img" />
          <div className="tags">{tags}</div>
          <p className="text">{text}</p>
          <p>Опубликовано {created_at}</p>
          <p>Изменено {updated_at}</p>
        </Card>
      </div>
    );
  };
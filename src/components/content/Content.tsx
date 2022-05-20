import React from "react";
import "./Content.css";

type ContentProps = {
  header: string;
  content: string;
};

const Content = (props: ContentProps) => {
  return (
    <div>
      <h2>{props.header}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Content;

import React from "react";
import "./Menu.css";

type MenuProps = {
  data: Array<string>;
};

const Menu = (props: MenuProps) => {
  return (
    <ul>
      {props.data.map((item) => (
        <li>
          <a href={item}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

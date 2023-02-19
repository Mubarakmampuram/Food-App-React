import React from "react";
import MediaCard from "./MediaCard";

function MenuList(props) {
  return (
    <div>
      <MediaCard data={props.data}></MediaCard>
    </div>
  );
}

export default MenuList;

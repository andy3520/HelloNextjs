"use client";
import React, { useCallback, useState } from "react";

const LikeButton = (props) => {
  const [likes, setLikes] = useState(0);
  const handleClick = useCallback(() => {
    setLikes((likes) => likes + 1);
  });

  return <button onClick={handleClick}>Likes ({likes})</button>;
};

export default LikeButton;

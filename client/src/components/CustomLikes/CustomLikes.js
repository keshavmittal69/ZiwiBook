import React from 'react'
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import "./CustomLikes.css"
const CustomLikes = ({LIKES , userId}) => {
    if (LIKES?.length > 0) {
        return LIKES?.find((like) => like === userId) ? (
          <>
            <AiFillLike className="card-icon" />
            &nbsp;
            {LIKES.length > 2
              ? `You and ${LIKES?.length - 1} others`
              : `${LIKES?.length} like${LIKES?.length > 1 ? "s" : ""}`}
          </>
        ) : (
          <>
            <AiOutlineLike className="card-icon" />
            &nbsp;{LIKES?.length} {LIKES?.length === 1 ? "Like" : "Likes"}
          </>
        );
      }
  
      return (
        <>
          <AiOutlineLike className="card-icon" />
          &nbsp;Like
        </>
      );
    };

export default CustomLikes
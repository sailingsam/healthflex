import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentForm from "./components/CommentForm";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Comment from "./components/Comment";

function App() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const sort = useSelector((state) => state.comments.sort);

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      dispatch({ type: "SET_COMMENTS", payload: JSON.parse(savedComments) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const toggleSort = () => {
    dispatch({ type: "TOGGLE_SORT" });
  };

  const handleAddComment = (comment) => {
    dispatch({
      type: "ADD_COMMENT",
      payload: { ...comment, date: new Date().toLocaleString(), replies: [] },
    });
  };

  const handleReply = (commentIndex, reply) => {
    dispatch({ type: "ADD_REPLY", payload: { commentIndex, reply } });
  };

  const handleDelete = (commentIndex, isReply = false, replyIndex = null) => {
    if (isReply && replyIndex !== null) {
      dispatch({ type: "DELETE_REPLY", payload: { commentIndex, replyIndex } });
    } else {
      dispatch({ type: "DELETE_COMMENT", payload: commentIndex });
    }
  };

  const sortedComments = [...comments]
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sort === "asc" ? dateA - dateB : dateB - dateA;
    })
    .map((comment) => ({
      ...comment,
      replies: [...comment.replies].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sort === "asc" ? dateA - dateB : dateB - dateA;
      }),
    }));

  return (
    <div className="max-w-xl mx-auto p-4 flex flex-col">
      <CommentForm onSubmit={handleAddComment} />
      <div className="w-full flex justify-end mt-2 font-semibold text-sm">
        <div className="hover:cursor-pointer" onClick={toggleSort}>
          <span className="mr-3">Sort By: Date & Time</span>
          <button>{sort === "asc" ? <FaArrowUp /> : <FaArrowDown />}</button>
        </div>
      </div>
      {sortedComments.map((comment, index) => (
        <Comment 
          key={index}
          index={index}
          comment={comment}
          onReply={(reply) => handleReply(index, reply)}
          onDelete={(reply, isReply) => {
            if (isReply) {
              const replyIndex = comments[index].replies.findIndex(
                (r) => r === reply
              );
              handleDelete(index, true, replyIndex);
            } else {
              handleDelete(index);
            }
          }}
        />
      ))}
    </div>
  );
}

export default App;

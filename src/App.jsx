import React, { useState, useEffect } from "react";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function App() {
  const [comments, setComments] = useState([]);
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    // Load comments from localStorage when the component mounts
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    // Save comments to localStorage whenever comments state changes
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const toggleSort = () => {
    setSort(sort === "asc" ? "desc" : "asc");
  };

  const handleAddComment = (comment) => {
    setComments((prevComments) => [
      ...prevComments,
      { ...comment, date: new Date().toLocaleString(), replies: [] },
    ]);
  };

  const handleReply = (commentIndex, reply) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments[commentIndex].replies.push(reply);
      return updatedComments;
    });
  };

  const handleDelete = (commentIndex, isReply = false, replyIndex = null) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];

      if (isReply && replyIndex !== null) {
        updatedComments[commentIndex].replies.splice(replyIndex, 1);
      } else {
        updatedComments.splice(commentIndex, 1);
      }

      return updatedComments;
    });
  };

  const sortedComments = [...comments].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sort === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <div className="max-w-xl mx-auto p-4 flex flex-col">
      <CommentForm onSubmit={handleAddComment} />
      <div className="w-full flex justify-end mt-2 font-semibold text-sm">
        <div className="hover:cursor-pointer" onClick={toggleSort}>
          <span className="mr-3">Sort By: Date & Time</span>
          <button>{sort === "asc" ? <FaArrowUp /> : <FaArrowDown />}</button>
        </div>
      </div>
      <CommentList
        comments={sortedComments}
        onReply={handleReply}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useRepliesStore } from "./utils/store";
import { comment } from "postcss";

function App() {
  const {
    comments: storeComment,
    addComment,
    addReply,
    deleteReply,
    deleteComment,
  } = useRepliesStore();

  const [sortType, setSortType] = React.useState("asc");

  const [filteredComments, setFilteredComments] = React.useState([]);

  useEffect(() => {
    const sortedComments = storeComment.sort((a, b) => {
      if (sortType === "asc") {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
    console.log(sortedComments);

    setFilteredComments([...sortedComments]);
  }, [storeComment, sortType]);

  const handleAddComment = (comment) => {
    addComment({ ...comment, date: new Date().toLocaleString(), replies: [] });
  };

  const handleReply = (commentIndex, reply) => {
    addReply(commentIndex, reply);
  };

  const handleDelete = (commentId, replyId) => {};

  const toggleSort = () => {
    setSortType((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="max-w-xl mx-auto p-4 flex flex-col">
      <CommentForm onSubmit={handleAddComment} />
      <div className="w-full flex justify-end mt-2 font-semibold text-sm">
        <div className="hover:cursor-pointer" onClick={toggleSort}>
          <span className="mr-3">Sort By: Date & Time</span>
          <button>
            {sortType === "asc" ? <FaArrowUp /> : <FaArrowDown />}
          </button>
        </div>
      </div>
      <div>
        {filteredComments?.map((comment, index) => (
          <Comment
            comment={comment}
            key={index}
            onDelete={onDelete}
            onReply={onReply}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

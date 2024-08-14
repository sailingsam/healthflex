import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import Reply from "./Reply";

function Comment({ name, comment, date, replies, onReply, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newComment, setNewComment] = useState(comment);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyName, setReplyName] = useState("");
  const [replyComment, setReplyComment] = useState("");

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyName.trim() && replyComment.trim()) {
      onReply({
        name: replyName,
        comment: replyComment,
        date: new Date().toLocaleString(),
      });
      setReplyName("");
      setReplyComment("");
      setShowReplyForm(false);
    }
  };

  return (
    <div className="">
      <div className="border px-4 py-1 mb-2 bg-gray-100 relative rounded-sm">
        <div className="flex justify-between">
          <div>
            <strong>{name}</strong>
            <p>
              {isEditing ? (
                <input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="border p-2 w-full"
                />
              ) : (
                newComment
              )}
            </p>
          </div>
          <div className="text-gray-500 text-sm">{date}</div>
        </div>
        <button
          className="text-blue-500 font-semibold"
          onClick={() => setShowReplyForm(!showReplyForm)}
        >
          Reply
        </button>
        <button
          onClick={handleEdit}
          className="text-blue-500 ml-5 font-semibold"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 rounded-full p-1 bg-gray-600 text-white"
          onClick={() => onDelete(null, false)}
        >
          <MdDelete />
        </button>
      </div>

      {/* Reply Form */}
      {showReplyForm && (
        <form
          onSubmit={handleReplySubmit}
          className="mt-2 ml-20 mb-2 border px-4 py-1 bg-gray-100 rounded-sm"
        >
          <span className="font-semibold">Reply</span>
          <input
            type="text"
            placeholder="Name"
            value={replyName}
            onChange={(e) => setReplyName(e.target.value)}
            className="border p-2 w-full mb-2"
          />
          <textarea
            placeholder="Reply"
            value={replyComment}
            onChange={(e) => setReplyComment(e.target.value)}
            className="border p-2 w-full"
          ></textarea>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-[2px] rounded mr-10"
            >
              Post Reply
            </button>
          </div>
        </form>
      )}

      {/* Display Replies */}
      {replies &&
        replies.map((reply, index) => (
          <Reply
            key={index}
            name={reply.name}
            reply={reply.comment}
            date={reply.date}
            onDelete={() => onDelete(reply, true, index)}
          />
        ))}
    </div>
  );
}

export default Comment;

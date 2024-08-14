import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

function Comment({ name, comment, date }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newComment, setNewComment] = useState(comment);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="border px-4 py-1 mb-2 bg-gray-100 relative">
      <div>
        <div className="flex justify-between">
          <div>
            <strong>{name}</strong>
            <p>
              {isEditing ? (
                <input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
              ) : (
                newComment
              )}
            </p>
          </div>
          <div className="text-gray-500 text-sm">{date}</div>
        </div>
        <button className="text-blue-500 font-semibold">Reply</button>
        <button
          onClick={handleEdit}
          className="text-blue-500 ml-5 font-semibold"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <div>
        <button className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 rounded-full p-1 bg-gray-600 text-white"
          onClick={() => {}}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default Comment;

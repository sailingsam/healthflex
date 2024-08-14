import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

function Reply({ name, reply, date, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newReply, setNewReply] = useState(reply);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="ml-10 border px-4 py-1 mb-2 bg-gray-200 relative rounded-sm">
      <div className="flex justify-between">
        <div>
          <strong>{name}</strong>
          <p>
            {isEditing ? (
              <input
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                className="border p-2 w-full"
              />
            ) : (
              newReply
            )}
          </p>
        </div>
        <div className="text-gray-500 text-sm">{date}</div>
      </div>
      <button
        onClick={handleEdit}
        className="text-blue-500 font-semibold"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 rounded-full p-1 bg-gray-600 text-white"
        onClick={onDelete}
      >
        <MdDelete />
      </button>
    </div>
  );
}

export default Reply;

import React, { useState } from "react";

function CommentForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      alert("Both name and comment are required.");
      return;
    }
    onSubmit({ name, comment, id: Date.now() });
  };

  return (
    <div className="bg-gray-100 px-2 py-1 my-1 rounded-sm">
      <h3 className="font-semibold">Comment</h3>
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-2 w-full"
        ></textarea>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-[2px] rounded mr-10"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;

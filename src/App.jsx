import React, { useState } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  const [comments, setComments] = useState([]);

  const handleAddComment = (comment) => {
    setComments([...comments, { ...comment, date: new Date().toLocaleDateString(), replies: [] }]);
  };

  const handleReply = (commentIndex, reply) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies.push(reply);
    setComments(updatedComments);
  };

  const handleDelete = (commentIndex, isReply, replyIndex = null) => {
    const updatedComments = [...comments];
    if (isReply && replyIndex !== null) {
      updatedComments[commentIndex].replies.splice(replyIndex, 1);
    } else {
      updatedComments.splice(commentIndex, 1);
    }
    setComments(updatedComments);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <CommentForm onSubmit={handleAddComment} />
      <CommentList comments={comments} onReply={handleReply} onDelete={handleDelete} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  const [comments, setComments] = useState([]);

  const handleAddComment = (comment) => {
    setComments([...comments, { ...comment, date: new Date().toLocaleDateString(), replies:[] }]);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <CommentForm onSubmit={handleAddComment} />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;

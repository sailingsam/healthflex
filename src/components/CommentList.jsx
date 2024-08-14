import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
}

export default CommentList;

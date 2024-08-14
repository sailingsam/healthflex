import React from 'react';
import Comment from './Comment';

function CommentList({ comments, onReply, onDelete }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          name={comment.name}
          comment={comment.comment}
          date={comment.date}
          replies={comment.replies}
          onReply={(reply) => onReply(index, reply)}
          onDelete={() => onDelete(index, false)}
        />
      ))}
    </div>
  );
}

export default CommentList;

import React from 'react';
import Comment from './Comment';

function CommentList({ comments, onReply, onDelete }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment 
          key={index} 
          {...comment} 
          onReply={(reply) => onReply(index, reply)} 
          onDelete={(reply, isReply) => {
            if (isReply) {
              // Find the index of the reply to delete
              const replyIndex = comments[index].replies.findIndex(r => r === reply);
              onDelete(index, true, replyIndex);
            } else {
              onDelete(index);
            }
          }}
        />
      ))}
    </div>
  );
}

export default CommentList;

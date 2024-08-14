import React from 'react';
import Comment from './Comment';

function CommentList({ comments, onReply, onDelete }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment 
          key={index} 
          index={index}
          {...comment} 
          onReply={(reply) => onReply(index, reply)} 
          onDelete={(reply, isReply) => {
            if (isReply) {
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

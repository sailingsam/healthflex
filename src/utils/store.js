import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useRepliesStore = create(
  persist(
    (set, get) => ({
      comments: [],
      addComment: (comment) =>
        set((state) => ({ comments: [...state.comments, comment] })),
      removeComment: (id) =>
        set((state) => ({
          comments: state.comments.filter((comment) => comment.id !== id),
        })),

      addReply: (commentId, reply) =>
        set((state) => {
          const comments = [...state.comments];
          const commentIndex = comments.findIndex(
            (comment) => comment.id === commentId
          );
          comments[commentIndex].replies.push(reply);
          return { comments };
        }),

      deleteComment: (commentId) =>
        set((state) => {
          const comments = [...state.comments];
          const commentIndex = comments.findIndex(
            (comment) => comment.id === commentId
          );
          comments.splice(commentIndex, 1);
          return { comments };
        }),

      deleteReply: (commentId, replyId) =>
        set((state) => {
          const comments = [...state.comments];
          const commentIndex = comments.findIndex(
            (comment) => comment.id === commentId
          );
          const replyIndex = comments[commentIndex].replies.findIndex(
            (reply) => reply.id === replyId
          );
          comments[commentIndex].replies.splice(replyIndex, 1);
          return { comments };
        }),
    }),
    {
      name: "comment-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

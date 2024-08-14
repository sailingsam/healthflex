const initialState = {
  comments: [],
  sort: "asc",
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMMENTS":
      return { ...state, comments: action.payload };
    case "ADD_COMMENT":
      return { ...state, comments: [...state.comments, action.payload] };
    case "ADD_REPLY":
      return {
        ...state,
        comments: state.comments.map((comment, index) =>
          index === action.payload.commentIndex
            ? {
                ...comment,
                replies: [...comment.replies, action.payload.reply],
              }
            : comment
        ),
      };
    case "DELETE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter((_, index) => index !== action.payload),
      };
    case "DELETE_REPLY":
      return {
        ...state,
        comments: state.comments.map((comment, index) =>
          index === action.payload.commentIndex
            ? {
                ...comment,
                replies: comment.replies.filter(
                  (_, replyIndex) => replyIndex !== action.payload.replyIndex
                ),
              }
            : comment
        ),
      };
    case "TOGGLE_SORT":
      return { ...state, sort: state.sort === "asc" ? "desc" : "asc" };
    default:
      return state;
  }
};

export default commentsReducer;
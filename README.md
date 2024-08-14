# Comments Section

A React.js(Vite) application that allows users to post comments and replies, edit them, delete them, and sort them by date. The app also persists data using localStorage so that comments are not lost on page refresh.

## Features

1. **Add Comments and Replies**: Users can add comments and replies with their name and comment text.
2. **Edit Comments**: Users can edit the comment text (but not the name).
3. **Delete Comments and Replies**: Users can delete comments and replies.
4. **Sort Comments**: Comments and replies can be sorted by date (ascending or descending).
5. **Data Persistence**: Comments are stored in localStorage to persist data across page reloads.
6. **Redux**: For state management
## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/sailingsam/healthflex
    cd clonedRepo
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Start the Application**:

    ```bash
    npm run dev
    ```

    This will start the development server and open the app in your default browser.

## Usage

1. **Add a Comment**:
   - Enter your name and comment text in the provided fields and click "Post" to add a new comment.

2. **Add a Reply**:
   - Click "Reply" on any comment to open the reply form. Enter your name and reply text, then click "Post Reply".

3. **Edit a Comment**:
   - Click "Edit" next to a comment to switch to editing mode. Update the comment text and click "Save" to save the changes.

4. **Delete a Comment or Reply**:
   - Click the delete button (trash icon) to remove a comment or reply.

5. **Sort Comments**:
   - Click the sort button (arrow up/down) to toggle between ascending and descending order based on the date and time.

## Data Persistence

Comments and replies are stored in the browser's localStorage to ensure data persists across page reloads. LocalStorage is used to save and retrieve comments:

- **Saving**: Comments are saved to localStorage whenever they are updated.
- **Loading**: Comments are loaded from localStorage when the app initializes.

## State Management

The app uses Redux for state management. The state is managed using Redux's `createStore` and `combineReducers` functions, and the `Provider` component from `react-redux` is used to make the store available to the entire app. The state is persisted using localStorage to ensure comments are not lost on page refresh.

const comments = [
  {
    id: 1,
    text: "This is the first comment",
    parentId: null,
    replies: [
      {
        id: 2,
        text: "This is a reply to the first comment",
        parentId: 1,
        replies: [
          {
            id: 3,
            text: "This is a nested reply",
            parentId: 2,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    text: "This is an independent comment",
    parentId: null,
    replies: [],
  },
];

const createCommentItem = (comment, level) => {
  const commentDiv = document.createElement("div");
  commentDiv.className = `comment-item comment-level-${level}`;
  commentDiv.innerHTML = `
    <p>${comment.text}</p>
  `;

  if (comment.replies.length > 0) {
    const repliesDiv = document.createElement("div");
    repliesDiv.className = "replies";

    comment.replies.forEach((reply) => {
      repliesDiv.appendChild(createCommentItem(reply, level + 1));
    });

    commentDiv.appendChild(repliesDiv);
  }

  return commentDiv;
};

const commentWrapper = document.querySelector(".comment-wrapper");

comments.forEach((comment, idx) => {
  if (comment.parentId === null) {
    commentWrapper.appendChild(createCommentItem(comment, idx));
  }
});

function renderPost(posts) {
  return `
    <div className="post">
      <span>${posts.userId}</span>
      <h1>${posts.title}</h1>
      <p>${posts.body}</p>
      <img src=${posts.urlContent} />
    </div>
  `;
}

module.exports = renderPost;

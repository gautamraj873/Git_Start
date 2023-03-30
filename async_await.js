const posts = [];

async function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const lastActivityTime = new Date().getTime();
      resolve(lastActivityTime);
    }, 1000);
  });
}

async function createPost(post) {
  posts.push(post);
}

async function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.pop();
      resolve();
    }, 1000);
  });
}

(async () => {
  try {
    await Promise.all([createPost({ title: 'New Post' }), updateLastUserActivityTime()]);
    console.log(posts);
    const lastActivityTime = await updateLastUserActivityTime();
    console.log(lastActivityTime);
    await deletePost();
    console.log('Post deleted');
    console.log(posts);
  } catch (error) {
    console.error('Error:', error);
  }
})();

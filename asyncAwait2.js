function fetchPostdata() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fetching Post data");
    }, 2000);
  });
}
function FetchCommentdata() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fectched");
    }, 3000);
  });
}
async function getBlogdata() {
  try {
    console.log("fetching data");
    // const postData = await fetchPostdata();
    // const commentData = await FetchCommentdata();
    const [postData, commentData] = await Promise.all([
      fetchPostdata(),
      FetchCommentdata(),
    ]);
    
    console.log(postData);
    console.log(commentData);
  } catch (error) {
    console.log("error while fetching", error);
  }
}
getBlogdata();

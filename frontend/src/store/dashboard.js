import { fetch } from "./csrf.js";

const TOGGLE_LIKE = "posts/TOGGLE_LIKE";
const DISPLAY_LIKES = "posts/DISPLAY_LIKES";

const setAllLikes = (posts) => ({
  type: DISPLAY_LIKES,
  posts,
});

const toggleLike = (singlePost) => ({
  type: TOGGLE_LIKE,
  singlePost,
});

//THUNK

export const displayAllLikes = () => async (dispatch) => {
  const allPostRes = await fetch("/api/dashboard/posts");
  const posts = allPostRes.data;

  const allLikesRes = await fetch("/api/dashboard/posts/like");
  const likes = allLikesRes.data;

  let likePost = [];

  for (let i = 0; i < likes.length; i++) {
    for (let j = 0; j < posts.length; j++) {
      if (likes[i].postId === posts[j].id) {
        likePost.push({
          ...likes[i],
          User: likes[i].User,
          userId: posts[j].userId,
          postType: posts[j].postType,
          title: posts[j].title,
          description: posts[j].description,
          src: posts[j].src,
          originalUser: posts[j].username,
          likedPost: posts[j].likedPost,
        });
      }
    }
  }

  return dispatch(setAllLikes([...likePost]));
};

export const setLike = (post) => async (dispatch) => {
  await fetch("/api/dashboard/posts/like", {
    method: "POST",
    body: post,
  });
  dispatch(toggleLike(post));
};

const initialState = [];
//REDUCER
const dashboardReducer = (state = [initialState], action) => {
  switch (action.type) {
    case DISPLAY_LIKES:
      return action.posts;
    case TOGGLE_LIKE:
      return action;
    default:
      return state;
  }
};

export default dashboardReducer;

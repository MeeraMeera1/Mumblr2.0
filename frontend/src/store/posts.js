import { fetch } from './csrf';

const ALL_POSTS = 'posts/allposts';
const CREATE_POST = 'posts/createPost';

const allPosts = (posts) => {
    return {
        type: ALL_POSTS,
        posts,
    };
};

const createPost = (post) => {
    return {
        type: CREATE_POST,
        post
    }
}

export const getAllPosts = () => {
    return async (dispatch) => {
        const res = await fetch("/api/dashboard");
        dispatch(
            allPosts(res.data)
        );
    };
};

export const post = (newPost) => {
    // const { images, image, username, email, password } = user;
    return async (dispatch) => {
        const res = await fetch("api/posts", {
            method: "POST",
            body: JSON.stringify(newPost)
        });
        dispatch(createPost(res.data));
    };
};

const initialState = { posts: null };

const postReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case ALL_POSTS:
            newState = {...state, posts: action.posts};
            return newState;
        case CREATE_POST:
            newState = { ...state, post: action.post };
            return newState;
        default:
            return state;
            
    }
}

export default postReducer;


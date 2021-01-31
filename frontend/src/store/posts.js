import { fetch } from './csrf';

const ALL_POSTS = 'posts/allposts';
const CREATE_POST = 'posts/createPost';
// const DELETE_POST = 'posts/deletePost';

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
    };
};

// const deletePost = (post) => {
//     return {
//         type: DELETE_POST,
//         post,
//     };
// };

export const getAllPosts = () => {
    return async (dispatch) => {
       const res = await fetch("/api/dashboard/posts");
       const posts = res.data;
       console.log(posts);
       dispatch(allPosts(posts));
    };
};

export const post = (newPost) => {
    // const { images, image, username, email, password } = user;
    return async (dispatch) => {
        const postRes = await fetch("api/posts", {
            method: "POST",
            body: newPost
        });
        if(postRes.data) dispatch(createPost(postRes.data));
    };
};

// export const trashPost = (post) => {
//     return async (dispatch) => {
//         const postRes = await fetch(`/api/posts/delete-post/${post.postId}`,{
//             method: 'DELETE',
//             body: JSON.stringify(post)
//         })
//         if(postRes.data) dispatch(deletePost(post));
//     }
// }

const initialState = [];

const postReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case ALL_POSTS:
            return action.posts;
        case CREATE_POST:
            newState = [...state, action.post];
            return newState;
        // case DELETE_POST:
        //     newState = 
        default:
            return state;
            
    }
}

export default postReducer;


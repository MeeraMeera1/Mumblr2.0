import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/posts';

function Profile() {
  const dispatch = useDispatch();

  const currentPosts = useSelector(state => {
    return state.posts;
  });
  
  useEffect(() => {
    dispatch( getAllPosts());
  }, [dispatch]);

  return (
    <div>
      {currentPosts && currentPosts.map(post => {
        return (
          <div className="post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <img src={post.urlContent} alt="urlContent"/>
          </div>
        )
      })}
    </div>
  );
}

export default Profile;
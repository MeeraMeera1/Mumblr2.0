import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/posts';
import Text from './text-post.png';
import Photo from './pic-post.png';
import Quote from './quote-post.png';
import LinkPost from './link-post.png';
import Audio from './audio-post.png';
import Video from './video-post.png';
import './DashboardPage.css';

function DashboardPage() {
  const sessionUser = useSelector((state) => state.session.user);
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  
  
  
  if (!sessionUser) return <Redirect to="/" />;
  console.log("posts", posts);

  return (
    <div className="dashboard-container">
      <div className="thumbnails">
        <NavLink to="/new/text">
          <img src={Text} alt="textpost" />
        </NavLink>
        <NavLink to="/new/image">
          <img src={Photo} alt="imagepost" />
        </NavLink>
        <img src={Quote} alt="quotepost" />
        <img src={LinkPost} alt="Linkpost" />
        <img src={Audio} alt="audiopost" />
        <img src={Video} alt="videopost" />
      </div>
      <div className="post-container">
        { posts &&
        posts.map((post) => {
          return (
            <div className="post">
              <NavLink to={`/${sessionUser.username}/posts`}>
                {sessionUser.username}
              </NavLink>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <img src={post.urlContent} alt="userpost" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DashboardPage;
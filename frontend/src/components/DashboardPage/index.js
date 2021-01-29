import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import "./Dashboard.css";
import displayPost from "./components/displayposttype";
import { getAllPosts } from "../../store/posts";

function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const currentPosts = useSelector((reduxState) => {
    return reduxState.posts;
  });

  const newPost = useSelector((reduxState) => {
    return reduxState.posts;
  });

  useEffect(() => {
      dispatch(getAllPosts());
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/" />;

  return (
    <>
      {/* { isLoaded && ( */}
      <div>
        <div className="spacer"></div>
        {currentPosts.map((post, idx) => {
          return displayPost(post, idx);
        })}
      </div>
      {/* )} */}
    </>
  );
}

export default Dashboard;

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { post } from "../../store/posts";

const ImagePostForm = () => {
  const history = useHistory({ forceRefresh: true });
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [urlContent, setUrlContent] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);
  const pathArray = window.location.pathname.split("/");
  const postType = pathArray[pathArray.length - 1];

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setUrlContent("");
    const imagePost = {
      title,
      postType,
      body,
      urlContent,
      userId: sessionUser.id,
    };

    dispatch(post(imagePost));
    history.push("/dashboard");
  };

  return (
    <>
      <form className="form-posts" onSubmit={handleSubmit}>
        {errors.map((error, idx) => (
          <p className="post-error" key={idx}>
            {error}
          </p>
        ))}
        <div>
          <label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              placeholder="Image URL"
              value={urlContent}
              onChange={(e) => {
                setUrlContent(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            <textarea
              type="text"
              placeholder="Description"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">CREATE POST</button>
        </div>
      </form>
    </>
  );
};

export default ImagePostForm;

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { post } from "../../store/posts";

const TextPostForm = () => {
  const history = useHistory({ forceRefresh: true });
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const textPost = {
      title,
      postType: "text",
      description,
      userId: sessionUser.id,
    };

    dispatch(post(textPost));
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
            <textarea
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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

export default TextPostForm;

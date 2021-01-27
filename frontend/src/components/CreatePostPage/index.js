import TextPostForm from "./TextPost";
import ImagePostForm from "./ImagePost";

const CreatePostForm = () => {
  const pathArray = window.location.pathname.split("/");
  const postType = pathArray[pathArray.length - 1];

  console.log("post type", postType);
  return (
    <>
      {postType === "text" && <TextPostForm />}
      {postType === "image" && <ImagePostForm />}
    </>
  );
};

export default CreatePostForm;

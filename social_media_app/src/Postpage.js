
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./context/DataContext";


const Postpage = () => {
  const {posts, handleDelete }=useContext(DataContext)
  
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="PostDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            {" "}
            <h2> Post Not Found</h2>
            <p>well,that's dissappointing</p>
            <p>
              <Link to="/"> visit our homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default Postpage;

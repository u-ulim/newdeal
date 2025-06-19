import PostFrom from "../components/posts/PostFrom";
import PostList from "../components/posts/PostList";

export default function PostApp() {
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <h1 className="text-center">Posts</h1>
          <PostFrom />
        </div>
      </div>
      <div>
        <div className="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <PostList />
        </div>
      </div>
    </div>
  );
}

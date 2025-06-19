import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePostStore } from "../../stores/postStore";
import { ImageOff } from "lucide-react";

const PostList: React.FC = () => {
  const fetchPostList = usePostStore((s) => s.fetchPostList);
  const postList = usePostStore((s) => s.postList);
  const totalCount = usePostStore((s) => s.totalCount);

  useEffect(() => {
    fetchPostList();
  }, []);

  return (
    <div className="post-list">
      <h3>총 게시글 수 : {totalCount}개</h3>
      {postList.map((post, index) => (
        <div
          className="d-flex my-3 p-3"
          style={{ background: "#efefef", borderRadius: 10 }}
        >
          <div style={{ width: "25%" }}>
            {post.image ? (
              <img
                src={`http:/localhost:7777/images/noimage.png`}
                alt={post.title}
                className="postImage"
              />
            ) : (
              <ImageOff style={{ width: "100px", height: "100px" }} />
            )}
          </div>
          <div className="flex-grow-1 ms-3">
            <h5>
              작성자: {post.writer}
              <br />
              <small className="text-muted">
                <i>Posted on {post.wdate}</i>
              </small>
            </h5>
            <Link to={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
          </div>
        </div>
      ))}
      {/* map =>  */}
      {/* <div
        className="d-flex my-3 p-3"
        style={{ background: "#efefef", borderRadius: 10 }}
      >
        <div style={{ width: "25%" }}>
          <img />
        </div>
        <div className="flex-grow-1 ms-3">
          <h4>
            작성자:
            <br />
            <small>
              <i>Posted on 날짜</i>
            </small>
          </h4>
          <Link to={`/posts/100`}>
            <h2>제목</h2>
          </Link>
        </div>
      </div> */}
      {/* 페이지 네비게이션 자리 ---------- */}
      <div></div>
    </div>
  );
};

export default PostList;

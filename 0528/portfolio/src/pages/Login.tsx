import { useContext, useState } from "react";
import { AuthContext, useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");

  const [userPassword, setUserPassword] = useState("");

  const { isLoggedIn, login, logout } = useAuth();

  const navigate = useNavigate();

  /// admin 1234
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId === "admin" && userPassword === `1234`) {
      login(userId);
      alert("로그인 성공");
      navigate("/");
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <section>
      <div className="inner">
        <h2>로그인 페이지</h2>
        {isLoggedIn ? (
          <button onClick={logout}>로그아웃</button>
        ) : (
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="아이디"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
            />
            <button type="submit">로그인</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Login;

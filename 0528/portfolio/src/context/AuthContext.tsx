import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

// context에 저장될 값들의 타입 정의하기
interface AuthContextType {
  isLoggedIn: boolean;
  userId: string | null;
  login: (email: string) => void;
  logout: () => void;
}

// context 생성하기
export const AuthContext = createContext<AuthContextType | null>(null);

// context 제공자 생성하기
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!cookies.user);
  const [userId, setUserId] = useState<string | null>(cookies.user || null);

  // 쿠키 변경 시 로그인 상태 업데이트
  useEffect(() => {
    if (cookies.user) {
      setIsLoggedIn(true);
      setUserId(cookies.user);
    } else {
      setIsLoggedIn(false);
      setUserId(null);
    }
  }, [cookies.user]);

  // 로그인 처리
  const login = (email: string) => {
    const exipireDate = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
    setIsLoggedIn(true);
    setUserId(email);
    setCookies("user", email, {
      path: "/",
      expires: exipireDate,
    });
  };

  // 로그아웃 처리
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// context가 null일 때 에러가 발생 이것을 구조분해할당 한다.
// useContext 사용할 때 context를 직접 쓰지 않고 재선언하여 사용한다.

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext not found");
  return context;
};

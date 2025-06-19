// post 관련 api요청을 서버에 보내는 모듈
// 포트 번호가 다르면 서버가 다른 것으로 간주. 도메인이 같지 않으면 서로 다른 서버라고 인식 cors 오류 발생

//POST 관련 API 요청을 서버에 보내는 모듈
import type { Post } from "../components/posts/types/post";
import axiosInstance from "./axiosInstance";

// 응답유형
// ---- POST 목록 조회 -----
export interface PostResponse {
  data: Post[];
  totalCount: number;
  //totalPages: number;
}

// ---- post 목록 가져오기 --------
export const apiFetchPostList = async (): Promise<PostResponse> => {
  const response = await axiosInstance.get("/posts");
  // response.data.data => 글목록
  // response.data.totalCount => 게시글수
  return response.data;
};

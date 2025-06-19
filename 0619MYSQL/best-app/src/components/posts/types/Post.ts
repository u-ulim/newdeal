export interface Post {
  id: number;
  writer: string;
  title: string;
  content: string;
  file?: string; // 업로드 파일. 선택사항 옵셔널
  wdate?: string;
  image?: string;
}

// 입력 폼과 관련된 스토어

import { create } from "zustand";

// 파일 업로드 FormData 객체 통해 전송해야함
interface PostFormState {
  formdata: {
    writer: string;
    title: string;
    content: string;
    file: File | null;
    image: File | null;
  };
  setFormData: (data: Partial<PostFormState["formdata"]>) => void;
  // Partial : 객체의 모든 속성을 선택적으로(optional)으로 바꿔줌
  //   resetForm: () => void;
}

export const usePostFormStore = create<PostFormState>((set) => ({
  formdata: {
    writer: "",
    title: "",
    content: "",
    file: null,
    image: null,
    newFile: null,
  },
  setFormData: (data) =>
    set((state) => ({
      formdata: {
        ...state.formdata,
        ...data,
      },
    })),
}));

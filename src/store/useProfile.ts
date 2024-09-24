import { create } from "zustand";

interface ProfileState {
  id: string;
  nickname: string;
  setId: (newId: string) => void;
  setNickname: (newNickname: string) => void;
}

const [id, nickname] = ["id", "nickname"];

const useProfile = create<ProfileState>((set) => ({
  id: id,
  nickname: nickname,
  setId: (newId: string) => set(() => ({ id: newId })),
  setNickname: (newNickname: string) => set(() => ({ nickname: newNickname })),
}));

export default useProfile;

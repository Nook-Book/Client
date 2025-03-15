import { useMutation } from "@tanstack/react-query";
import { postUserInfo } from "../../api/user/info";
import { postUserNicknameCheck } from "../../api/user/nickname";
import { postUserIdCheck } from "../../api/user/nickname_id";
import {
  UserInfoRequest,
  UserInfoResponse,
  UserNicknameRequest,
  UserRequest,
  UserResponse,
} from "../../types/user/user";

export function useUserIdCheck() {
  return useMutation<UserResponse, Error, UserRequest>({
    mutationFn: (userRequest) => postUserIdCheck(userRequest),
  });
}

export function useUserNicknameCheck() {
  return useMutation<UserResponse, Error, UserNicknameRequest>({
    mutationFn: (userRequest) => postUserNicknameCheck(userRequest),
  });
}

export function useUserInfo() {
  return useMutation<UserInfoResponse, Error, UserInfoRequest>({
    mutationFn: (userRequest) => postUserInfo(userRequest),
  });
}

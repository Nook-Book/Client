import api from "..";

// 마이 프로필 프로필 변경
export const putProfileImage = async (image: File): Promise<{} | undefined> => {
  try {
    const formData = new FormData();
    formData.append("isDefaultImage", JSON.stringify(true));
    formData.append("profileImage", image);

    const response = await api.put(`/api/v1/my-page/image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

import api from "..";

// 마이 프로필 프로필 변경
export const putProfileImage = async (image: any): Promise<{} | undefined> => {
  try {
    const formData = new FormData();
    formData.append("image", {
      uri: image.uri,
      name: image.fileName || "photo.jpg",
      type: image.type || "image/jpeg",
    } as any);

    const response = await api.patch(
      `/api/v1/my-page/profile-image`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

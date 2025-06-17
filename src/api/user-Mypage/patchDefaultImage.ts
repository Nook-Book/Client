import api from "..";

const patchDefaultImage = async () => {
  const response = await api.patch(`/api/v1/my-page/profile-image/default`);
  return response.data;
};

export default patchDefaultImage;

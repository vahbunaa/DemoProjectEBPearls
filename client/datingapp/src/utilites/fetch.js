import axiosInstance from "../configs/axios";

const utils = {
  fetchData: async (url) => {
    const { data } = await axiosInstance.get(url);
    return data;
  },
  updateData: async (url, payload) => {
    const { data } = await axiosInstance.patch(url, { ...payload });
    return data;
  },
  deleteData: async (url) => {
    return await axiosInstance.delete(url);
  },
};

export { utils };

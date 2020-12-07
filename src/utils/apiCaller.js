import axiosService from "./../common/axiosService";
const FOOD_HOST = "http://localhost:3000/foods";
export const getFoodMenus = async () => {
  const { data } = await axiosService.get(FOOD_HOST);
  return data;
};
export const getFoodMenusId = async (id) => {
  const { data } = await axiosService.get(`${FOOD_HOST}/${id}`);
  return data;
};

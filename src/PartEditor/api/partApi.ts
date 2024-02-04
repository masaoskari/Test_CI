import axios from "axios";
import { RootState } from "../../App/redux/store";

export type Part = {
  id: string;
  name: string;
  description: string;
};

const getApiUrl = (state: RootState) => state.appConfig.apiUrl;

export const fetchPart = async (
  state: RootState,
  id: string,
): Promise<Part> => {
  const response = await axios.get(`${getApiUrl(state)}/parts/${id}`);
  return response.data;
};

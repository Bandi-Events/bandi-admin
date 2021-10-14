import { AxiosResponse } from 'axios';

import { http } from 'api/http';
import { User } from 'interfaces/User';
import { USERS_ENDPOINT } from 'constants/routes';

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const res: AxiosResponse<User[]> = await http.get<User, AxiosResponse<User[]>>(USERS_ENDPOINT);
    return http.success(res);
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id: number): Promise<User> => {
  try {
    const res: AxiosResponse<User> = await http.get<User, AxiosResponse<User>>(`${USERS_ENDPOINT}/${id}`);
    return http.success(res);
  } catch (error) {
    throw error;
  }
};

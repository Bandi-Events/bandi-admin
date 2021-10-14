import { AxiosResponse } from 'axios';

import { http } from 'api/http';
import { Transaction } from 'interfaces/Transaction';
import { TRANSACTIONS_ENDPOINT } from 'constants/routes';

export const getAllTransactions = async (): Promise<Transaction[]> => {
  try {
    const res: AxiosResponse<Transaction[]> = await http.get<Transaction, AxiosResponse<Transaction[]>>(
      TRANSACTIONS_ENDPOINT,
    );
    return http.success(res);
  } catch (error) {
    throw error;
  }
};

export const getTransactionById = async (id: number): Promise<Transaction> => {
  try {
    const res: AxiosResponse<Transaction> = await http.get<Transaction, AxiosResponse<Transaction>>(
      `${TRANSACTIONS_ENDPOINT}/${id}`,
    );
    return http.success(res);
  } catch (error) {
    throw error;
  }
};

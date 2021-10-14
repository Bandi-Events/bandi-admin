import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest',
};

class Http {
  private instance: AxiosInstance | null = null;
  private token: string;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: 'http://localhost:3000', // update with link to server URL
      headers,
      withCredentials: true,
    });

    http.interceptors.request.use(this.injectToken, (error) => Promise.reject(error));
    http.interceptors.response.use(
      ({ data }) => data,
      (error) => {
        throw new Error(error);
      },
    );

    this.instance = http;
    return http;
  }

  injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
    try {
      const token = localStorage.getItem('accessToken');

      if (token != null) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      throw error;
    }
  };

  public getToken = (): string => {
    return `Bearer ${this.token}`;
  };

  public setToken = (token: string): void => {
    this.token = token;
  };

  public getUri = (config?: AxiosRequestConfig): string => {
    return this.http.getUri(config);
  };

  public request = <T, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> => {
    return this.http.request(config);
  };

  public get = <T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    return this.http.get(url, config);
  };

  public options = <T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    return this.http.options(url, config);
  };

  public delete = <T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    return this.http.delete(url, config);
  };

  public head = <T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    return this.http.head(url, config);
  };

  public post = <T, B, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R> => {
    return this.http.post(url, data, config);
  };

  public put = <T, B, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R> => {
    return this.http.put(url, data, config);
  };

  public patch = <T, B, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R> => {
    return this.http.patch(url, data, config);
  };

  public success = <T>(response: AxiosResponse<T>): T => {
    return response.data;
  };

  public error = <T>(error: AxiosError<T>): void => {
    throw error;
  };
}

export const http = new Http();

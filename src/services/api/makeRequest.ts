import axios from 'axios';
import {LogService} from './../log/LogService';
import {IResponse} from './api.types';

interface Props {
  url: string;
  method?: 'POST' | 'PUT' | 'DELETE' | 'GET';
  payload?: any;
  headers?: Record<string, string>;
}

export const makeRequest = async <T>(
  props: Props,
): Promise<IResponse<T>> => {
  try {
    const response = await axios({
      url: props.url,
      method: props.method,
      headers: props.headers,
      data: props.payload,
    });
    const nRes = response.data as IResponse<T>;
    const tData = {...nRes, data: nRes.data as T};
    return tData;
  } catch (error) {
    LogService.error(error);
    throw error;
  }
};

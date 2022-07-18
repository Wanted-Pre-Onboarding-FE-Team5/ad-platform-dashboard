import axios, { AxiosInstance } from 'axios';
import { HttpRequest } from '../http/httpRequest';

export const channelStatusService: AxiosInstance = axios.create({ baseURL: 'http://localhost:8000/channel-report' });
export const channelStatusRequest = new HttpRequest(channelStatusService);

import axios, { AxiosInstance } from 'axios';
import { HttpRequest } from '../http/httpRequest';

export const totalAdStatusService: AxiosInstance = axios.create({ baseURL: 'http://localhost:8000/total-report' });

export const totalAdStatusRequest = new HttpRequest(totalAdStatusService);

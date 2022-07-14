import axios from 'axios';
import { HttpRequest } from '../http/httpRequest';

export const totalAdStatusService = axios.create({ baseURL: 'http://localhost:8000/total-report/daily' });
export const totalAdStatusRequest = new HttpRequest(totalAdStatusService);

import axios from 'axios';
import { HttpRequest } from '../http/httpRequest';

export const adListService = axios.create({ baseURL: 'http://localhost:8000/ads' });
export const adListRequest = new HttpRequest(adListService);

import axios from 'axios';
import { HttpRequest } from '../http/httpRequest';

export const channelStatusService = axios.create({ baseURL: 'http://localhost:8000/channel-report' });
export const channelStatusRequest = new HttpRequest(channelStatusService);

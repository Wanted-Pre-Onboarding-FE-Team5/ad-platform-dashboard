export class HttpRequest {
  constructor(service) {
    this.service = service;
  }
  get(url) {
    return this.service.get(url);
  }
  put(id, data) {
    return this.service.put(`/${id}`, data);
  }
}

import http from "../http-common";
class ItemDataService {
  getAll() {
    return http.get("/items");
  }
  get(slug: string) {
    return http.get(`/items/${slug}`);
  }
  //create(data: ITutorialData) {
  //  return http.post<ITutorialData>("/tutorials", data);
  //}
  read(slug: string) {
    return http.patch(`/items/${slug}/`, {"read":true});
  }
  delete(slug: string) {
    return http.delete(`/items/${slug}`);
  }
  deleteAll() {
    return http.delete(`/items`);
  }
}
export default new ItemDataService();

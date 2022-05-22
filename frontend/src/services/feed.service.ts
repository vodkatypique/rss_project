import http from "../http-common";
class FeedDataService {
  getAll() {
    return http.get("/feeds");
  }
  get(slug: string) {
    return http.get(`/feeds/${slug}`);
  }
  //create(data: ITutorialData) {
  //  return http.post<ITutorialData>("/tutorials", data);
  //}
  //update(data: ITutorialData, id: any) {
  //  return http.put<any>(`/tutorials/${id}`, data);
  //}
  delete(slug: string) {
    return http.delete(`/feeds/${slug}`);
  }
  deleteAll() {
    return http.delete(`/feeds`);
  }
}
export default new FeedDataService();

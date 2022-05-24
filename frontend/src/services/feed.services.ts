import http from "../http-common";
class FeedDataService {
  getAll() {
    return http.get("/feeds");
  }
  get(slug: string ) {
    return http.get(`/feeds/${slug}`);
  }
  create(data: {title: string, feed_url: string, feeders: number[], slug: string}) {
    return http.post("/feeds/", data);
  }
  //update(data: ITutorialData, id: any) {
  //  return http.put<any>(`/tutorials/${id}`, data);
  //}
  delete(slug: string) {
    return http.delete(`/feeds/${slug}`);
  }
  deleteAll() {
    return http.delete(`/feeds`);
  }
  refetchData(){
    return http.get(`/update`);
  }
}
export default new FeedDataService();

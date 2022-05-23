import http from "../http-common";
class UserDataService {
  getAll() {
    return http.get("/users");
  }

  create(data: {username: string, password: string} ) {
    return http.post("/users/", data); //TODO les info sont en clair sur le reseau
  }
}
export default new UserDataService();

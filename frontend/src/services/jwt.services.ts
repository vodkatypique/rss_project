import http from "../http-common";
class JwtDataService {
  create(data :{username: string, password: string}) { //TODO bad mdp en clair sur le reseau
    return http.post("/api/token/", data);
  }

}
export default new JwtDataService();

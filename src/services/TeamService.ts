import http from "../http_common";

const getAll = () => {
  return http.get("/teams");
};

const TeamService = {
  getAll
};

export default TeamService;
import http from "../http_common";

const getTeams = () => {
  return http.get("/teams");
};

const TeamService = {
  getTeams
};

export default TeamService;
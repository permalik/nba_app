import http from "../http_common";

const getGames = () => {
  return http.get("/games?seasons[]=2012");
};

const TeamService = {
  getGames
};

export default TeamService;
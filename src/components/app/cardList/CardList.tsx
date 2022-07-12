import {useEffect, useState} from "react";
import TeamService from "../../../services/TeamService";
// import Card from "../card";

const CardList = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    retrieveTeams();
  }, []);
  const retrieveTeams = () => {
    TeamService.getAll()
      .then(response => {
        setTeams(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <ul>
          {
            teams &&
            teams.map((team: any, index: number) => (
              <li key={index}>{team.abbreviation}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default CardList;
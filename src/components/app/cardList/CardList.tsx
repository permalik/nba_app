import {v4 as uuid} from "uuid";
import React, {useEffect, useState} from "react";
import TeamService from "../../../services/TeamService";
import Card from "../card";
import Modal from "../modal/Modal";

const CardList = () => {
  const [teams, setTeams] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event: any) => {
    setIsShown(current => !current);
  };
  useEffect(() => {
    retrieveTeams();
  }, []);
  const retrieveTeams = () => {
    TeamService.getTeams()
      .then(response => {
        setTeams(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <section>
      <div>
        {isShown && <Modal toggleOpen={handleClick}/>}
        <div>
          <ul>
            {
              teams &&
              teams.map((team: any, index: number) => (
                <Card
                  abbreviation={team.abbreviation}
                  key={uuid()}
                  name={team.full_name}
                  toggleOpen={handleClick}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CardList;
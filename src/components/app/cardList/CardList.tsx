import {v4 as uuid} from "uuid";
import React, {useEffect, useState} from "react";
import GameService from "../../../services/GameService";
import TeamService from "../../../services/TeamService";
import Card from "../card";
import Modal from "../modal/Modal";
import Content from "../modal/content/Content";

class ITeam {
  abbreviation!: string;
  name!: string;
}



const CardList = () => {
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [games, setGames] = useState<any[]>([]);
  const [date, setDate] = useState("");

  const handleClick = () => {
    setIsShown(current => !current);
  };

  const handleMultiple = (item: any) => {
    setTeam(item.abbreviation);
    handleClick();
  };

  const teamParser = ((array: any) => {
    let newTeam = array.map((item: any, index: number) => {
      const team = new ITeam();
      team.abbreviation = item.abbreviation;
      team.name = item.name;
      return team;
    });
    return newTeam;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GameService.getGames();
        setGames(result.data.data);
        // console.log(result.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await TeamService.getTeams();
        let newTeam = teamParser(result.data.data)
        setTeams(newTeam);
        console.log(newTeam);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div>
        {
          isShown
          &&
            <Modal toggleOpen={handleClick}>
              {/*{*/}
              {/*  games*/}
              {/*  &&*/}
              {/*  games.map((game: any, index: number) => (*/}
              {/*    team === game.home_team.abbreviation*/}
              {/*      ?*/}
              {/*      (*/}
              {/*        <Content*/}
              {/*          date={game.date}*/}
              {/*          homeAbbreviation={game.home_team.abbreviation}*/}
              {/*          homeScore={game.home_team}*/}
              {/*          key={index}*/}
              {/*          visitorAbbreviation={game.visitor_team.abbreviation}*/}
              {/*          visitorScore={game.visitorScore}*/}
              {/*        />*/}
              {/*      )*/}
              {/*      :*/}
              {/*      null*/}
              {/*  ))*/}
              {/*}*/}
            </Modal>
        }
        <div>
          <ul>
            {
              teams.map((team: any, index: number) => (
                <Card
                  abbreviation={team.abbreviation}
                  key={uuid()}
                  name={team.name}
                  toggle={() => handleMultiple(team)}
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
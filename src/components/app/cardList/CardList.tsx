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

class IGame {
  date!: string;
  homeAbbreviation!: string;
  homeScore!: number;
  visitorAbbreviation!: string;
  visitorScore!: number;
}

const CardList = () => {
    const [teams, setTeams] = useState([]);
    const [team, setTeam] = useState("");
    const [isShown, setIsShown] = useState(false);
    const [games, setGames] = useState<any[]>([]);

    const handleClick = () => {
      setIsShown(current => !current);
    };

    const handleMultiple = (item: any) => {
      const handleState = async () => {
        try {
          setTeam("");
          await setTeam(item);
          handleClick();
        } catch (e) {
          console.log(e);
        }
      };
      handleState();
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

    const gameParser = ((array: any) => {
      let newGame = array.map((item: any, index: number) => {
        const game = new IGame();
        game.date = item.date.split("T")[0];
        game.homeAbbreviation = item.home_team.abbreviation;
        game.homeScore = item.home_team_score;
        game.visitorAbbreviation = item.visitor_team.abbreviation;
        game.visitorScore = item.visitor_team_score;
        return game;
      });
      return newGame;
    });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await TeamService.getTeams();
          let newTeam = teamParser(result.data.data);
          setTeams(newTeam);
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
    }, []);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await GameService.getGames();
          let newGame = gameParser(result.data.data);
          setGames(newGame);
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
    }, []);

    return (
      <section className="
      flex
      flex-col
      items-center
      justify-center">
        {
          isShown
          &&
            <Modal toggleOpen={handleClick}>
              {
                games.map((game: any, index: number) => (
                  team === game.homeAbbreviation
                    ?
                    (
                      <Content
                        date={game.date}
                        homeAbbreviation={game.homeAbbreviation}
                        homeScore={game.homeScore}
                        key={index}
                        visitorAbbreviation={game.visitorAbbreviation}
                        visitorScore={game.visitorScore}
                      />
                    )
                    :
                    null
                ))
              }
            </Modal>
        }
        <div className="
        flex
        flex-nowrap
        flex-row">
          <div>
            <ul className="
            flex
            flex-row
            flex-wrap
            items-center
            justify-center
            gap-3">
              {
                teams.map((team: any, index: number) => (
                  <Card
                    abbreviation={team.abbreviation}
                    key={uuid()}
                    name={team.name}
                    toggle={() => handleMultiple(team.abbreviation)}
                  />
                ))
              }
            </ul>
          </div>
        </div>
      </section>
    );
  }
;

export default CardList;
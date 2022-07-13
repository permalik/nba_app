import {v4 as uuid} from "uuid";
import {useEffect, useState} from "react";
import GameService from "../../../services/GameService";

interface Props {
  children?: any;
  date?: any;
  homeAbbreviation?: any;
  homeScore?: any;
  toggleOpen?: any;
  visitorAbbreviation?: any;
  visitorScore?: any;
}

const Modal = ({
                 children,
                 date,
                 homeAbbreviation,
                 homeScore,
                 toggleOpen,
                 visitorAbbreviation,
                 visitorScore
               }: Props) => {
  // const [games, setGames] = useState([]);
  // useEffect(() => {
  //   retrieveGames();
  // }, []);
  // const retrieveGames = () => {
  //   GameService.getGames()
  //     .then(response => {
  //       setGames(response.data.data);
  //       console.log(response.data.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  return (
    <div
      className="
      modal
      mx-auto
      fade
      fixed
      w-3/6
      h-full
      outline-none
      overflow-x-hidden
      overflow-y-auto"
    >
      <div
        className="
        modal-dialog
        relative
        w-auto
        pointer-events-none"
      >
        <div
          className="
          modal-content
          border-none
          shadow-lg
          relative
          flex
          flex-col
          w-full
          pointer-events-auto
          bg-white
          bg-clip-padding
          rounded-md
          outline-none
         text-current"
        >
          <div
            className="
            modal-header
            flex
            flex-shrink-0
            items-center
            justify-between
            p-4
            border-b
            border-gray-200
            rounded-t-md"
          >
            <h3 className="
            text-xl
            font-medium
            leading-normal
            text-gray-800"
            >
              Season Stats
            </h3>
          </div>
          <div
            className="
            flex
            flex-col
            modal-body
            relative
            p-4"
          >
            {children}
            {/*{*/}
            {/*  games &&*/}
            {/*  games.map((game: any, index: number) => (*/}
            {/*    game.home_team.abbreviation === `${home}`*/}
            {/*      ?*/}
            {/*      (*/}
            {/*        <div key={uuid()}>*/}
            {/*          <p>*/}
            {/*            home:<span>{game.home_team.abbreviation}</span>*/}
            {/*          </p>*/}
            {/*          {game.home_team_score}*/}
            {/*        </div>*/}
            {/*      )*/}
            {/*      :*/}
            {/*      null*/}
            {/*  ))*/}
            {/*}*/}
            {/*{*/}
            {/*  games &&*/}
            {/*  games.map((game: any, index: number) => (*/}
            {/*    game.visitor_team.abbreviation === `${visitor}`*/}
            {/*      ?*/}
            {/*      (*/}
            {/*        <div>*/}
            {/*          <p>*/}
            {/*            visitor:<span>{game.visitor_team.abbreviation}</span>*/}
            {/*          </p>*/}
            {/*          {game.visitor_team_score}*/}
            {/*        </div>*/}
            {/*      )*/}
            {/*      :*/}
            {/*      null*/}
            {/*  ))*/}
            {/*}*/}
          </div>
          <div
            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              className="
              px-6
              py-2.5
              bg-red-500
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-red-600 hover:shadow-lg
              focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-red-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"
              onClick={toggleOpen}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
interface Props {
  date: string;
  homeAbbreviation: string;
  homeScore: string;
  visitorAbbreviation: string;
  visitorScore: string;
}

const Content = ({
                   date,
                   homeAbbreviation,
                   homeScore,
                   visitorAbbreviation,
                   visitorScore
                 }:
                   Props) => {
  return (
    <>
      <header>
        <h4>Game: {date}</h4>
      </header>
      <section>
        <p>
          Home: <span>{homeAbbreviation}</span>
        </p>
        <p>
          Visitor: <span>{visitorAbbreviation}</span>
        </p>
      </section>
      <section>
        <p>H-{homeScore}</p>
        <p>V-{visitorScore}</p>
      </section>
    </>
  );
};

export default Content;
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
        <h4>GAMEDATE{date}</h4>
      </header>
      <section>
        <p>H:
          <span>
                  -{homeAbbreviation}
                </span>
        </p>
        <p>V:
          <span>
                  -{visitorAbbreviation}
                </span>
        </p>
      </section>
      <section>
        <p>-{homeScore}</p>
        <p>-{visitorScore}</p>
      </section>
    </>
  );
};

export default Content;
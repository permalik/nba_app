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
      <div className='
      border-black
      border-2
      px-6
      py-2
      rounded-md'>
        <header>
          <h4 className="
        flex
        flex-row
        justify-between">
          <span>
            Game Date:
          </span>
            <span>
            {date}
          </span>
          </h4>
        </header>
        <section>
          <p className="
        flex
        flex-row
        justify-between">
          <span>
            Home Team:
          </span>
            <span>
            {homeAbbreviation}
          </span>
          </p>
          <p className="
        flex
        flex-row
        justify-between">
          <span>
            Visiting Team:
          </span>
            <span>
            {visitorAbbreviation}
          </span>
          </p>
        </section>
        <section>
          <p className="
          flex
          flex-row
          justify-between">
          <span>
            Home Score:
          </span>
            <span>
            {homeScore}
          </span>
          </p>
          <p className="
        flex
        flex-row
        justify-between">
          <span>
            Visiting Score:
          </span>
            <span>
            {visitorScore}
          </span>
          </p>
        </section>
      </div>
    </>
  );
};

export default Content;
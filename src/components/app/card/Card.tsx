interface Props {
  abbreviation: string;
  name: string;
}

const Card = ({abbreviation, name}: Props) => {
  return (
    <li>
      <div>
        <div>
          <div>
            <p>
              {abbreviation}
            </p>
          </div>
        </div>
        <h2>
          {name}
        </h2>
      </div>
    </li>
  );
};

export default Card;
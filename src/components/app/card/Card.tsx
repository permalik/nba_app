interface Props {
  abbreviation: string;
  name: string;
}

const Card = ({abbreviation, name}: Props) => {
  return (
    <li>
      <div>
        <p>
          {abbreviation}
        </p>
      </div>
      <h2>
        {name}
      </h2>
    </li>
  );
};

export default Card;
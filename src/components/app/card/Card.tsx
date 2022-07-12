import React from "react";

interface Props {
  abbreviation: string;
  name: string;
  toggleOpen: any;
}

const Card = ({abbreviation, name, toggleOpen}: Props) => {
  return (
    <li
      className="
      border-grey-500
      border-2
      cursor-pointer"
      onClick={toggleOpen}
    >
      <div>
        <section>
          <div>
            <p>
              {abbreviation}
            </p>
          </div>
        </section>
        <h2>
          {name}
        </h2>
      </div>
    </li>
  );
};

export default Card;
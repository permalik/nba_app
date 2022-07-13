import React from "react";

interface Props {
  abbreviation: string;
  name: string;
  toggle: any;
}

const Card = ({abbreviation, name, toggle}: Props) => {
  return (
    <li
      className="
      border-grey-500
      border-2
      cursor-pointer"
      onClick={toggle}
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
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
      cursor-pointer
      min-w-sm
      shadow-current
      shadow-sm
      text-slate-300"
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
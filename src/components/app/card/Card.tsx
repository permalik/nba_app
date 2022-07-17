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
      px-3
      py-2
      rounded-md
      shadow-current
      shadow-sm"
      onClick={toggle}
    >
      <div>
        <section>
          <div>
            <p className="text-slate-300">
              {abbreviation}
            </p>
          </div>
        </section>
        <h2 className="text-slate-300">
          {name}
        </h2>
      </div>
    </li>
  );
};

export default Card;
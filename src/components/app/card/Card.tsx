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
      px-5
      py-4
      rounded-md
      shadow-current
      shadow-sm"
      onClick={toggle}
    >
      <div className="
      flex
      flex-row
      justify-between">
        <div>
          <div className="
          bg-slate-600
          flex
          flex-row
          items-center
          justify-center
          rounded-full"
               style={{height: "50px", width: "50px"}}>
            <p className="text-slate-300">
              {abbreviation}
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-slate-300">
            {name}
          </h2>
        </div>
      </div>
    </li>
  );
};

export default Card;
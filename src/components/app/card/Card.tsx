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
      bg-secondary
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
      items-center
      justify-between">
        <div>
          <div className="
          bg-complementary
          flex
          flex-row
          items-center
          justify-center
          rounded-full"
               style={{height: "50px", width: "50px"}}>
            <p className="text-primary">
              {abbreviation}
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-quaternary">
            {name}
          </h2>
        </div>
      </div>
    </li>
  );
};

export default Card;
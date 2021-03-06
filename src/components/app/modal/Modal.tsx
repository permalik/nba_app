interface Props {
  children?: any;
  toggleOpen?: any;
}

const Modal = ({
                 children,
                 toggleOpen,
               }: Props) => {

  return (
    <div
      className="
      fixed
      flex
      flex-col
      items-center
      justify-center
      mx-auto
      w-3/6
      h-full
      min-w-sm
      outline-none
      overflow-x-hidden
      overflow-y-auto"
    >
      <div
        className={`
        bg-white
        relative
        w-full
        rounded-md
        pointer-events-none`}
      >
        <div
          className="
          border-none
          shadow-lg
          relative
          flex
          flex-col
          w-full
          pointer-events-auto
          outline-none
         text-current"
        >
          <div
            className="
            bg-white
            flex
            flex-shrink-0
            items-center
            justify-between
            p-4
            border-b
            border-gray-200
            rounded-t-md
            z-50"
          >
            <h3 className="
            text-xl
            font-medium
            leading-normal
            text-gray-800"
            >
              Season Stats
            </h3>
          </div>
          <div
            className="
            flex
            flex-col
            gap-5
            relative
            px-8
            py-4"
          >
            {children}
          </div>
          <div
            className="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              className="
              bg-red-500
              px-6
              py-2.5
              bg-secondary
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-red-600
              hover:shadow-lg
              focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-red-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"
              onClick={toggleOpen}
              // style={{background: "red"}}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
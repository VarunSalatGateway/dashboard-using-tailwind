const CardTwo = () => {
  return (
    <div className="rounded-3xl border relative  border-stroke bg-white overflow-hidden py-6 px-9 shadow-default before:absolute before:w-full cursor-pointer before:h-1 before:bg-[#e57710] before:three-mili-sec-trans before:translate-y-[100%] hover:before:translate-y-0 before:bottom-0 before:left-0 dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#FDEFE2] dark:bg-meta-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-[#e57710] dark:fill-white"
          width="20"
          height="22"
          viewBox="0 0 30 30"
          fill="none"
        >
          <g clipPath="url(#clip0_252_371)">
            <path
              d="M29.5898 10.2422L27.2695 7.92187C26.7187 7.37109 25.8281 7.37109 25.2832 7.92187L11.25 21.9551L4.72266 15.4219C4.17188 14.8711 3.28125 14.8711 2.73633 15.4219L0.410156 17.748C-0.140625 18.2988 -0.140625 19.1895 0.410156 19.7402L10.2539 29.5898C10.8047 30.1406 11.6953 30.1406 12.2402 29.5898L29.584 12.2344C30.1348 11.6777 30.1348 10.7871 29.5898 10.2422ZM10.5879 16.4531C10.9512 16.8223 11.5488 16.8223 11.9121 16.4531L24.0996 4.25391C24.4629 3.88477 24.4629 3.29297 24.0996 2.92969L21.4512 0.275391C21.0879 -0.09375 20.4902 -0.09375 20.127 0.275391L11.25 9.15234L8.00391 5.90039C7.64063 5.53125 7.04297 5.53125 6.67969 5.90039L4.02539 8.55469C3.66211 8.92383 3.66211 9.51562 4.02539 9.87891L10.5879 16.4531Z"
              fill=""
            />
          </g>
          <defs>
            <clipPath id="clip0_252_371">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            36
          </h4>
          <span className="text-sm font-medium">Attended Patients</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          4.35%
          <svg
            className="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
              fill=""
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CardTwo;

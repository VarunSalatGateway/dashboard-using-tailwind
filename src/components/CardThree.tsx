const CardThree = () => {
  return (
    <div className="rounded-3xl border border-stroke  bg-white py-6 px-9 relative overflow-hidden shadow-default before:absolute before:w-full cursor-pointer before:h-1 before:bg-[#00b83a] before:three-mili-sec-trans before:translate-y-[100%] hover:before:translate-y-0 before:bottom-0 before:left-0 dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#E0F3E6] dark:bg-meta-4">
        <svg
          className="fill-[#00b83a] dark:fill-white"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7812 3.75C16.0401 3.75 16.25 3.54012 16.25 3.28125V1.71875C16.25 1.45988 16.0401 1.25 15.7812 1.25H4.21875C3.95988 1.25 3.75 1.45988 3.75 1.71875V3.46672C3.75 3.72559 3.95988 3.93547 4.21875 3.93547H7.55C8.61672 3.93547 9.4352 4.32445 9.93164 5H4.21875C3.95988 5 3.75 5.20988 3.75 5.46875V7.03125C3.75 7.29012 3.95988 7.5 4.21875 7.5H10.4202C10.1773 8.90961 9.13266 9.79031 7.5 9.79031H4.21875C3.95988 9.79031 3.75 10.0002 3.75 10.2591V12.3298C3.75 12.4607 3.80469 12.5855 3.90082 12.6743L10.3482 18.6257C10.4348 18.7056 10.5483 18.75 10.6661 18.75H13.8912C14.3179 18.75 14.5227 18.2263 14.2091 17.9368L8.31527 12.4963C11.3035 12.4049 13.4381 10.4106 13.7183 7.5H15.7812C16.0401 7.5 16.25 7.29012 16.25 7.03125V5.46875C16.25 5.20988 16.0401 5 15.7812 5H13.4887C13.3525 4.54918 13.1652 4.13102 12.932 3.75H15.7812Z"
            fill=""
          />
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            2.450
          </h4>
          <span className="text-sm font-medium">Total Revenue</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          2.59%
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

export default CardThree;
